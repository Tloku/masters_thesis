create table drive_type (
	id SERIAL NOT NULL,
	type VARCHAR(50) UNIQUE,
	PRIMARY KEY (id)
);

insert into drive_type (type) values ('FWD');
insert into drive_type (type) values ('RWD');
insert into drive_type (type) values ('AWD');
insert into drive_type (type) values ('4WD');