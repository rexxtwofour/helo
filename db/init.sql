drop table if exists users cascade;
drop table if exists posts;


create table users (
    id serial primary key,
    username varchar(20), 
    password varchar(20),
    profile_pic text
);



create table posts (
    id serial primary key,
    title varchar(45),
    img text,
    content text, 
    author_id foreign key references users (id)
);




// join


select users.id, users.usernane
from users join posts 
on users.id = posts.author_id;
