Aby uruchomić replikowalne bazy danych postgresql należy najpierw uruchomić minikube poleceniem

~~~~
minikube start
~~~~

Po uruchomieniu, w celu łatwiejszego przeglądania tego, co się dzieje w naszym cluster, można uruchomić konsole minikube poleceniem

~~~~
minikube dashboard
~~~~

Następnie poleceniem kubectl apply -f budujemy kolejno:

~~~~
kubectl apply -f persistent-volume-and-claim.yaml
kubectl apply -f oto-auto-db-svc.yaml
kubectl apply -f config.yaml
kubectl apply -f oto-auto-db-master.yaml
~~~~

Po uruchomieniu statefulset master musimy stworzyć w tej bazie użytkownika obsługującego replikowanie danych.

Wchodzimy do poda poleceniem:

~~~~
kubectl exec -it oto-auto-db-master-0 -- bash
~~~~

Następnie wchodzimy do psql

~~~~
psql -U dominik -d oto_auto
~~~~

i wykonujemy polecenie

~~~~
CREATE ROLE replica_user WITH REPLICATION LOGIN PASSWORD '12345';
~~~~

Następnie wychodzimy z poda używając komend

~~~~
\q
~~~~

i 

~~~~
exit
~~~~

po dodaniu użytkownika musimy zrestartować statefulset, w celu zapisania zmian

~~~~
kubectl rollout restart statefulset oto-auto-db-master
~~~~

po wykonaniu restartu możemy zbudować repliki

~~~~
kubectl apply -f oto-auto-db-replica.yaml
~~~~

Teraz możemy sprawdzić używając komendy 

~~~~
kubectl logs oto-auto-db-replica-0
~~~~

czy pod repliki są w trybie streamowania danych. W logach powinno znaleźć się takie zdanie

```started streaming WAL from primary at 0/5000000 on timeline 1```

Następnie możemy przetestować działanie replikacji. Po dokonaniu zmian na bazie master, zmiany powinny pojawić się też w replikach.