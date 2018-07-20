insert info posts ( id , title, img, content, author_id ) values ($1,$2,$3,$4,$5)
returning *;




insert into posts values (1,farmville,'https://pixabay.com/en/chicken-hen-cute-family-animals-159496/' ,chickens,$1)
insert into posts values (2,rideforlife, 'https://pixabay.com/en/horses-horse-head-animals-1414889/' ,horses,$2)
insert into posts values (3,baconandmore, 'https://pixabay.com/en/piglet-wildpark-poing-young-animals-1332259' ,pigs,$3)
insert into posts values (4,sweaterforall,'https://pixabay.com/en/ireland-sheep-lambs-livestock-1985088',sheep,$4)