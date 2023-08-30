CREATE TABLE Body_type (
  id   SERIAL NOT NULL, 
  type varchar(50) NOT NULL UNIQUE, 
  PRIMARY KEY (id));

CREATE TABLE Car_status (
  id     SERIAL NOT NULL, 
  status varchar(50) NOT NULL UNIQUE, 
  PRIMARY KEY (id));

CREATE TABLE Dealer (
  id           SERIAL NOT NULL, 
  name         varchar(50) NOT NULL, 
  site_url     varchar(2000), 
  phone_number varchar(11) NOT NULL, 
  is_private   boolean NOT NULL, 
  address      varchar(50), 
  PRIMARY KEY (id));

CREATE TABLE Drive_type (
  id   SERIAL NOT NULL, 
  type varchar(50) NOT NULL UNIQUE, 
  PRIMARY KEY (id));

CREATE TABLE Equipment (
  id                SERIAL NOT NULL, 
  name              varchar(100) NOT NULL UNIQUE, 
  equipment_type_id int4 NOT NULL, 
  PRIMARY KEY (id));

CREATE TABLE Equipment_type (
  id   SERIAL NOT NULL, 
  type varchar(50) NOT NULL UNIQUE, 
  PRIMARY KEY (id));

CREATE TABLE Fuel_type (
  id   SERIAL NOT NULL, 
  type varchar(50) NOT NULL UNIQUE, 
  PRIMARY KEY (id));

CREATE TABLE Offer (
  id              SERIAL NOT NULL, 
  name            varchar(50) NOT NULL, 
  creation_date   date NOT NULL, 
  expiration_date date NOT NULL, 
  price           varchar(20) NOT NULL, 
  currency        varchar(5) NOT NULL, 
  description     varchar(300), 
  Dealer_id       int4 NOT NULL, 
  Vehicle_id      int4 NOT NULL, 
  PRIMARY KEY (id));

CREATE TABLE Transmission_type (
  id   SERIAL NOT NULL, 
  type varchar(50) NOT NULL UNIQUE, 
  PRIMARY KEY (id));
  
CREATE TABLE Vehicle_type (
  id   SERIAL NOT NULL, 
  type varchar(50) NOT NULL UNIQUE, 
  PRIMARY KEY (id));

CREATE TABLE Vehicle (
  id                      SERIAL NOT NULL, 
  is_imported             boolean NOT NULL, 
  has_registration_number boolean NOT NULL, 
  brand                   varchar(50) NOT NULL, 
  model                   varchar(50) NOT NULL, 
  generation              varchar(50) NOT NULL, 
  year_of_production      varchar(4) NOT NULL, 
  mileage                 varchar(50) NOT NULL, 
  mileage_unit            varchar(4) NOT NULL, 
  city_fuel_usage         float, 
  on_the_road_fuel_usage  float, 
  co2_emission            int4, 
  doors_number            int4 NOT NULL, 
  sits_number             int4 NOT NULL, 
  color                   varchar(50) NOT NULL, 
  color_type              varchar(50), 
  origin_country          varchar(50), 
  registered_in_poland    boolean NOT NULL, 
  has_crashed             boolean NOT NULL, 
  Body_type_id            int4 NOT NULL, 
  Drive_type_id           int4 NOT NULL, 
  Vehicle_type_id         int4 NOT NULL, 
  Car_status_id           int4 NOT NULL, 
  Transmission_type_id    int4 NOT NULL, 
  Fuel_type_id            int4 NOT NULL, 
  Equipment_type_id       int4 NOT NULL, 
  PRIMARY KEY (id));

ALTER TABLE Equipment ADD CONSTRAINT FKEquipment40620 FOREIGN KEY (equipment_type_id) REFERENCES Equipment_type (id);
ALTER TABLE Vehicle ADD CONSTRAINT FKVehicle827666 FOREIGN KEY (Body_type_id) REFERENCES Body_type (id);
ALTER TABLE Vehicle ADD CONSTRAINT FKVehicle661275 FOREIGN KEY (Drive_type_id) REFERENCES Drive_type (id);
ALTER TABLE Vehicle ADD CONSTRAINT FKVehicle736379 FOREIGN KEY (Vehicle_type_id) REFERENCES Vehicle_type (id);
ALTER TABLE Vehicle ADD CONSTRAINT FKVehicle523273 FOREIGN KEY (Car_status_id) REFERENCES Car_status (id);
ALTER TABLE Vehicle ADD CONSTRAINT FKVehicle894408 FOREIGN KEY (Transmission_type_id) REFERENCES Transmission_type (id);
ALTER TABLE Vehicle ADD CONSTRAINT FKVehicle311141 FOREIGN KEY (Fuel_type_id) REFERENCES Fuel_type (id);
ALTER TABLE Vehicle ADD CONSTRAINT FKVehicle881539 FOREIGN KEY (Equipment_type_id) REFERENCES Equipment_type (id);
ALTER TABLE Offer ADD CONSTRAINT FKOffer221307 FOREIGN KEY (Dealer_id) REFERENCES Dealer (id);
ALTER TABLE Offer ADD CONSTRAINT FKOffer327532 FOREIGN KEY (Vehicle_id) REFERENCES Vehicle (id);
