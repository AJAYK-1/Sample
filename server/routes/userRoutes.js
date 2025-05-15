const express = require('express')
const { registerUser, createOrder, fetchCartById, viewproducts, viewOrder, loginuser } = require('../control/userControl')
const userRouter = express.Router()


userRouter.post('/registeruser',registerUser)
userRouter.post('/loginuser',loginuser)
userRouter.post('/addorder',createOrder)
userRouter.get('/viewcartbyid',fetchCartById)
userRouter.get('/getproducts',viewproducts)
userRouter.get('/vieworder',viewOrder)


module.exports = userRouter