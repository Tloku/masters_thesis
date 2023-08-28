create table transmission_type (
	id SERIAL NOT NULL,
	type VARCHAR(50) UNIQUE,
	PRIMARY KEY (id)
);

insert into transmission_type (type) values ('manual');
insert into transmission_type (type) values ('automatic');