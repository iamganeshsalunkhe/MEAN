CREATE TABLE user (
    id INT primary key auto_increment,
    name varchar(100),
    email varchar(100),
    password varchar(100),
    phone varchar(20),
    address varchar(100)
);

CREATE TABLE notes(
    id INT primary  key auto_increment,
    title varchar(100),
    content varchar(1024),
    userId int, 
    isPrivate int(1) default 1 ,
    file varchar (100)
)