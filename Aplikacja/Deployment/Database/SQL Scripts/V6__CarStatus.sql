create table car_status (
	id SERIAL NOT NULL,
	status VARCHAR(50) UNIQUE,
	PRIMARY KEY (id)
);

insert into car_status (status) values ('new');
insert into car_status (status) values ('used');
insert into car_status (status) values ('crashed');