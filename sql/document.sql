CREATE TABLE IF NOT EXISTS proyect(
    id integer PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
    name text NOT NULL CHECK ( name <> '' ),
    priority integer not null,
    description text,
    deliverydate date NOT NULL
); 

CREATE TABLE IF NOT EXISTS task(
    id integer PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
    name text NOT NULL CHECK ( name <> '' ),
    done boolean,
    proyectId integer REFERENCES proyect( id )
);

 INSERT INTO proyect( name, priority, description, deliverydate ) 
 VALUES ( 'MAKE web ', 1, 'usando javaScript', 2019-02-1 );

 INSERT INTO task ( name, done, proyectId ) 
 VALUES ( 'descargar vue.js', false, 1 );