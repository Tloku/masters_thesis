create table fuel_type (
	id SERIAL NOT NULL,
	type VARCHAR(50) UNIQUE,
	PRIMARY KEY (id)
);

insert into fuel_type (type) values ('Diesel');
insert into fuel_type (type) values ('Petrol');
insert into fuel_type (type) values ('Gas');
insert into fuel_type (type) values ('Electric');