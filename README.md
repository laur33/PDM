# PDM Database
Jade web front for inserting/viewing data using mongoose from mongodb

Install mongodb and node.js.

mkdir C:\data\db   (default mongodb test db directory)

run mongod.exe.  

Open a new command prompt type:

1: mongo

2: use TestDB

Open a new command prompt and type

'npm start' while in project directory to run, alternatively just open the project in webstorm and run bin\www from there.

Web front should then be accessible on localhost:3000

Enter a Username, password and email click add and it will be stored in TestDB in users collection . Currently they are all required in the schema and if you do not enter one you will get an error that I havent handled correctly yet. Username also must be unique.

If you want to add a second user please refresh the page first otherwise you'll get an error.

Can retrieve the username entered by going to localhost:3000/UserList (Have to refresh twice for data to show up)

Install robomongo to check and ensure data is updated in database, have to refresh the query in robomongo each time you enter new data.
