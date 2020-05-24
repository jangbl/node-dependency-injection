create table developer (
	id serial primary key,
	email varchar(254) unique not null,
	first_name varchar(512) not null
	middle_names varchar(1024),
	last_name varchar(512) not null
);