const express = require('express')
const UserRouter = express.Router()
const userController = require('../controller/userdetails')
const Authorization = require('../middleware/auth.js')

//Registartion
UserRouter.post('/register', userController.register)

//Login
UserRouter.post('/login', userController.login)

UserRouter.get('/editData',Authorization.authorizeAdmin, userController.editData)

//userdetails
UserRouter.get('/samples',Authorization.authorizeUserAdmin, userController.samples)

UserRouter.put('/edit',Authorization.authorizeAdmin, userController.edituser)

module.exports = UserRouter