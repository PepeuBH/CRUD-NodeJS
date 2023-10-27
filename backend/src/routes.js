const express = require("express");
const routes = express.Router()
const UserController = require('./controllers/UserController')

//list all users
routes.get("/users", UserController.index)

//create new user
routes.post("/newUser", UserController.create)

//delete user
routes.delete("/deleteUser/:id", UserController.delete)

//get user by ID
routes.get("/user/:id", UserController.getUserByID)

//update user data
routes.put("/user/:id", UserController.update)





module.exports = routes
