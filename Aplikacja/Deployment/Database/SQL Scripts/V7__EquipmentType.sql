create table equipment_type (
	id SERIAL NOT NULL,
	type VARCHAR(50) UNIQUE,
	PRIMARY KEY (id)
);

insert into equipment_type (type) values ('Audio i multimedia');
insert into equipment_type (type) values ('Komfort i dodatki');
insert into equipment_type (type) values ('Systemy wspomagania kierowcy');
insert into equipment_type (type) values ('Osiągi i tuning');
insert into equipment_type (type) values ('Bezpieczeństwo');
insert into equipment_type (type) values ('Samochody elektryczne');