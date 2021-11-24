# menu_card_assign
Assignment from Menu Card - Basic CRUD REST APIs

This app is deployed on heroku at https://stormy-beach-92141.herokuapp.com

Postman collection link: https://www.getpostman.com/collections/c1268b536d4692d5f1b2


run 'npm start' to start the app in your local machine.
visit localhost:8080/getAll

All routes:
  - localhost:8080/getAll
    displays all the data in DB
  
  - localhost:8080/create
    create a new data
    request body format: 
    {
      "title" : "Goto Market",
      "description" : "Buy apples and mangoes",
      "status" : "pending"
    }
  
  - localhost:8080/edit/{Id}
    edit one data
    request body format - same as /create
  
  - localhost:8080/delete/{id}
    delete one data
    
