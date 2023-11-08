# Stawianie baz danych na kubernetesie

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


# Wykonanie skryptów bazy danych na podzie oto-auto-db-master-0

Aby wykonać skrypty na bazie najpierw musimy przekopiwać folder ze skryptami znajdujący się w folderze Database. Robimy to skryptem

~~~~
kubectl cp ~/Desktop/Projekty/masters_thesis/Aplikacja/Deployment/Database/SQL_Scripts/  oto-auto-db-master-0:/
~~~~

Musimy też przekopiować skrypt, który wykona nasze sql'owe skrypty

~~~~
kubectl cp ~/Desktop/Projekty/masters_thesis/Aplikacja/Deployment/Database/initdb.sh  oto-auto-db-master-0:/SQL_Scripts
~~~~

Następnie wchodzimy na poda oto-auto-db-master-0

~~~~
kubectl exec -it oto-auto-db-master-0 -- bash
~~~~

Wchodzimy do folderu /SQL_Scripts i wykonujemy dwa polecenia

~~~~
chmod +x initdb.sh
./initdb.sh
~~~~

Teraz powinny wykonywać się skrypty. Po zakończeniu możemy sprawdzić na replikach, czy dane się przekopiowały. Po tym kroku nasza baza jest już gotowa do użytkowania.



# Połącznenie się na localhoscie z bazą znajdującą się w minikubie

Aby połączyć się z bazą danych na minikubie musimy mieć service'y, które będą przekierowywać nas do statefulsetów. Następnym krokiem jest port-forwardowanie query z localhosta na minikube.
Robi się to komendą:

~~~~
kubectl port-forward service/db-master-svc 8090:5432
kubectl port-forward service/db-replica-svc 8091:5432
~~~~

Po wykonaniu tych komend nasz serwer (jeśli properties jest ustawione prawidłowo) powinien łączyć się z naszymi bazami danych.
