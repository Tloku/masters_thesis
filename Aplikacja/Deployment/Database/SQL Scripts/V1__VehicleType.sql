create table vehicle_type (
	id SERIAL NOT NULL,
	type VARCHAR(50) UNIQUE,
	PRIMARY KEY (id)
);

insert into vehicle_type (type) values ('car');
insert into vehicle_type (type) values ('motorcycle');