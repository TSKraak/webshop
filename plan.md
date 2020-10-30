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

[] Models aanmaken
[] database checken met migratie
[] dummy data seeden
[] relaties aangeven
[] querying om te testen
[] restfull server maken, incl. routes
[] routes testen
[] authorization toevoegen
[] Final test
[] functionaliteiten toevoegen?
