

CREATE TABLE region(
    id serial not null primary key,
    city_name text not null
);

CREATE TABLE trip(
    id serial not null primary key,
    route_id int,
    taxi_id int,
    foreign key (route_id) references Route(id),
    foreign key (taxi_id) references taxi(id)
);

CREATE TABLE route(
    id serial not null primary key,
    route_name text not null,
    fare decimal(10,2)
);


CREATE TABLE taxi(
    id serial not null primary key,
    reg_number text not null,
    region_id int,
    foreign key (region_id) references region(id)
  
);

insert into region(city_name) values ('Durban');
insert into region(city_name) values ('Cape Town');
insert into region(city_name) values ('Gauteng');


insert into taxi(reg_number,region_id) values('DN 7740',1);
insert into taxi(reg_number,region_id) values('DN 5040',1);
insert into taxi(reg_number,region_id) values('DN 1170',1);

insert into taxi(reg_number,region_id) values('CA 7540',2);
insert into taxi(reg_number,region_id) values('CA 8870',2);

insert into taxi(reg_number,region_id) values('GP 0014',3);

insert into route(route_name,fare) values('Cape Town - Bellville' ,18.5);
insert into route(route_name,fare) values('Cape Town - Gugulethu', 19.00);
insert into route(route_name,fare) values('Cape Town - Langa', 15.00);

insert into route(route_name,fare) values('Sandton - Randburg', 25.00);
insert into route(route_name,fare) values('Alexandra - Sandton', 19.00);
insert into route(route_name,fare) values('Sandton - Midrand', 20.00);

insert into route(route_name,fare) values('Umlazi - Durban Central', 45.00);
insert into route(route_name,fare) values('Durban Central - Umhlanga Rocks', 19.00);
insert into route(route_name,fare) values('Durban Central - Umbilo', 20.00);