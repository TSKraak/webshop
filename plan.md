## Generate models

User:
npx sequelize-cli model:generate --name user --attributes firstName:string,lastName:string,street:string,number:string,zipCode:string,country:string,email:string,phone:integer,password:string,admin:boolean

Category:
npx sequelize-cli model:generate --name category --attributes name:string,description:string,imageUrl:string

Orders:
npx sequelize-cli model:generate --name order --attributes userId:string,status:string,pricePerUnit:float

Product:
npx sequelize-cli model:generate --name product --attributes categoryId:string,name:string,imageUrl:string,price:float,status:string

Order-items:
npx sequelize-cli model:generate --name orderItem --attributes orderId:integer,productId:integer,quantity:integer

## To Do

[x] Models aanmaken
[x] database checken met migratie
[x] dummy data seeden
[x] relaties aangeven
[x] querying om te testen
[] restfull server maken, incl. routes
[] routes testen
[] authorization toevoegen
[] Final test
[] functionaliteiten toevoegen?

## seeders

User:
npx sequelize-cli seed:generate --name some-users
npx sequelize-cli seed:generate --name some-orders
npx sequelize-cli seed:generate --name some-order-items
npx sequelize-cli seed:generate --name some-categories
npx sequelize-cli seed:generate --name some-products

Authorization:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTYwNDA3NDUwOSwiZXhwIjoxNjA0MDgxNzA5fQ.fbfanBjHZV86mxgrncJtyOG-4JwHIOjBSYslcTen7aM"
