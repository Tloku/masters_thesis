create table equipment (
	id SERIAL NOT NULL,
	name VARCHAR(50) UNIQUE,
    equipmentTypeId INT,
	PRIMARY KEY (id)
);

alter table equipment add constraint FKEquipment1 foreign key (equipmentTypeId) references equipment_type (id);

insert into equipment (name, equipmentTypeId) values ('Apple CarPlay', 1);
insert into equipment (name, equipmentTypeId) values ('Android Auto', 1);
insert into equipment (name, equipmentTypeId) values ('Interfejs Bluetooth', 1);
insert into equipment (name, equipmentTypeId) values ('Radio', 1);
insert into equipment (name, equipmentTypeId) values ('Zestaw głośnomówiący', 1);
insert into equipment (name, equipmentTypeId) values ('Gniazdo USB', 1);
insert into equipment (name, equipmentTypeId) values ('System nagłośnienia', 1);
insert into equipment (name, equipmentTypeId) values ('Ekran dotykowy', 1);
insert into equipment (name, equipmentTypeId) values ('System nawigacji satelitarnej', 1);
insert into equipment (name, equipmentTypeId) values ('Ekran dotykowy', 1);
insert into equipment (name, equipmentTypeId) values ('Sterowanie funkcjami pojazdu za pomocą głosu', 1);
insert into equipment (name, equipmentTypeId) values ('Dostęp do internetu', 1);


insert into equipment (name, equipmentTypeId) values ('Klimatyzacja automatyczna, dwustrefowa', 2);
insert into equipment (name, equipmentTypeId) values ('Dach materiałowy', 2);
insert into equipment (name, equipmentTypeId) values ('Dach panoramiczny', 2);
insert into equipment (name, equipmentTypeId) values ('Tapicerka skórzana', 2);
insert into equipment (name, equipmentTypeId) values ('Klimatyzacja dla pasażerów z tyłu', 2);
insert into equipment (name, equipmentTypeId) values ('Elektrycznie ustawiany fotel kierowcy', 2);
insert into equipment (name, equipmentTypeId) values ('Elektrycznie ustawiany fotel pasażera', 2);
insert into equipment (name, equipmentTypeId) values ('Podgrzewany fotel kierowcy', 2);
insert into equipment (name, equipmentTypeId) values ('Podgrzewany fotel pasażera', 2);
insert into equipment (name, equipmentTypeId) values ('Siedzenie z pamięcią ustawienia', 2);
insert into equipment (name, equipmentTypeId) values ('Ogrzewane siedzenia tylne', 2);
insert into equipment (name, equipmentTypeId) values ('Kierownica ogrzewana', 2);
insert into equipment (name, equipmentTypeId) values ('Elektryczne szyby przednie', 2);
insert into equipment (name, equipmentTypeId) values ('Elektryczne szyby tylne', 2);
insert into equipment (name, equipmentTypeId) values ('Wycieraczki', 2);
insert into equipment (name, equipmentTypeId) values ('Dach otwierany elektrycznie', 2);
insert into equipment (name, equipmentTypeId) values ('Kierownica wielofunkcyjna', 2);
insert into equipment (name, equipmentTypeId) values ('Kierownica ze sterowaniem radia', 2);
insert into equipment (name, equipmentTypeId) values ('Kierownica skórzana', 2);
insert into equipment (name, equipmentTypeId) values ('Podłokietniki - przód', 2);
insert into equipment (name, equipmentTypeId) values ('Podłokietniki - tył', 2);
insert into equipment (name, equipmentTypeId) values ('Fotele przednie z funkcje masażu', 2);
insert into equipment (name, equipmentTypeId) values ('Dźwignia zmiany biegów wykończona skórą', 2);
insert into equipment (name, equipmentTypeId) values ('Przyciemniane tylne szyby', 2);
insert into equipment (name, equipmentTypeId) values ('Czujnik deszczu', 2);
insert into equipment (name, equipmentTypeId) values ('Keyless entry', 2);

insert into equipment (name, equipmentTypeId) values ('Tempomat adaptacyjny ACC', 3);
insert into equipment (name, equipmentTypeId) values ('Lampy przednie w technologii LED', 3);
insert into equipment (name, equipmentTypeId) values ('Kontrola odległości z przodu (przy parkowaniu)', 3);
insert into equipment (name, equipmentTypeId) values ('Kontrola odległości z tyłu (przy parkowaniu)', 3);
insert into equipment (name, equipmentTypeId) values ('Park Assistant - asystent parkowania', 3);
insert into equipment (name, equipmentTypeId) values ('Kamera parkowania tył', 3);
insert into equipment (name, equipmentTypeId) values ('Lusterka boczne ustawiane elektrycznie', 3);
insert into equipment (name, equipmentTypeId) values ('Podgrzewane lusterka boczne', 3);
insert into equipment (name, equipmentTypeId) values ('Lusterka boczne składane elektrycznie', 3);
insert into equipment (name, equipmentTypeId) values ('Asystent (czujnik) martwego pola', 3);
insert into equipment (name, equipmentTypeId) values ('Aktywny asystent zmiany pasa ruchu', 3);
insert into equipment (name, equipmentTypeId) values ('Lane assist - kontrola zmiany pasa ruchu', 3);
insert into equipment (name, equipmentTypeId) values ('Ogranicznik prędkości', 3);
insert into equipment (name, equipmentTypeId) values ('Asystent hamowania - Brake Assist', 3);
insert into equipment (name, equipmentTypeId) values ('Kontrola trakcji', 3);
insert into equipment (name, equipmentTypeId) values ('Asystent świateł drogowych', 3);
insert into equipment (name, equipmentTypeId) values ('Oświetlenie adaptacyjne', 3);
insert into equipment (name, equipmentTypeId) values ('Dynamiczne światła doświetlające zakręty', 3);
insert into equipment (name, equipmentTypeId) values ('Czujnik zmierzchu', 3);
insert into equipment (name, equipmentTypeId) values ('Lampy doświetlające zakręt', 3);
insert into equipment (name, equipmentTypeId) values ('Światła do jazdy dziennej', 3);
insert into equipment (name, equipmentTypeId) values ('Światła do jazdy dziennej diodowe LED', 3);
insert into equipment (name, equipmentTypeId) values ('Lampy przeciwmgielne', 3);
insert into equipment (name, equipmentTypeId) values ('System Start/Stop', 3);
insert into equipment (name, equipmentTypeId) values ('Elektroniczna kontrola ciśnienia w oponach', 3);
insert into equipment (name, equipmentTypeId) values ('Elektryczny hamulec postojowy', 3);
insert into equipment (name, equipmentTypeId) values ('Wspomaganie kierownicy', 3);
insert into equipment (name, equipmentTypeId) values ('Blokada mechanizmu różnicowego', 3);
insert into equipment (name, equipmentTypeId) values ('Tempomat', 3);
insert into equipment (name, equipmentTypeId) values ('Kamera panoramiczna 360', 3);
insert into equipment (name, equipmentTypeId) values ('Lampy tylne w technologii LED', 3);

insert into equipment (name, equipmentTypeId) values ('Felgi aluminiowe 19', 4);
insert into equipment (name, equipmentTypeId) values ('Zawieszenie regulowane', 4);
insert into equipment (name, equipmentTypeId) values ('Felgi aluminiowe 17', 4);
insert into equipment (name, equipmentTypeId) values ('Opony letnie', 4);
insert into equipment (name, equipmentTypeId) values ('Zawieszenie sportowe', 4);
insert into equipment (name, equipmentTypeId) values ('Felgi aluminiowe 18', 4);
insert into equipment (name, equipmentTypeId) values ('Opony zimowe', 4);

insert into equipment (name, equipmentTypeId) values ('ABS', 5);
insert into equipment (name, equipmentTypeId) values ('ESP', 5);
insert into equipment (name, equipmentTypeId) values ('Aktywny asystent hamowania awaryjnego', 5);
insert into equipment (name, equipmentTypeId) values ('System ostrzegający o możliwej kolizji', 5);
insert into equipment (name, equipmentTypeId) values ('System minimalizujący skutki kolizji', 5);
insert into equipment (name, equipmentTypeId) values ('Poduszka powietrzna kierowcy', 5);
insert into equipment (name, equipmentTypeId) values ('Poduszka powietrzna pasażera', 5);
insert into equipment (name, equipmentTypeId) values ('Poduszka kolan kierowcy', 5);
insert into equipment (name, equipmentTypeId) values ('Poduszka kolan pasażera', 5);
insert into equipment (name, equipmentTypeId) values ('Kurtyny powietrzne - przód', 5);
insert into equipment (name, equipmentTypeId) values ('Boczne poduszki powietrzne - przód', 5);
insert into equipment (name, equipmentTypeId) values ('Isofix (punkty mocowania fotelika dziecięcego)', 5);
insert into equipment (name, equipmentTypeId) values ('Kurtyny powietrzne - tył', 5);
insert into equipment (name, equipmentTypeId) values ('Boczna poduszka powietrzna kierowcy', 5);
insert into equipment (name, equipmentTypeId) values ('Asystent pasa ruchu', 5);
insert into equipment (name, equipmentTypeId) values ('Alarm ruchu poprzecznego z tyłu pojazdu', 5);


insert into equipment (name, equipmentTypeId) values ('System odzyskiwania energii', 6);
insert into equipment (name, equipmentTypeId) values ('Funkcja szybkiego ładowania', 6);
insert into equipment (name, equipmentTypeId) values ('Kabel do ładowania', 6);

