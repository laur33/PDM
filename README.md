# PDM
Jade web front for inserting data into mongodb


Once you've got mongod.exe running ensure you have connected to TestDB.

npm start while in project directory to run

Web front should then be accessible on localhost:3000

Enter a Username, password and email and it will be stored in TestDB. Currently they are all required in the schema and if you do not enter one you will get an error that I havent handled correctly yet. Username also must be unique.
