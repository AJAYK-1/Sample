const express = require('express')
const { registerUser } = require('../control/userControl')
const userRouter = express.Router()


userRouter.post('/registeruser',registerUser)
userRouter.post('/loginuser',registerUser)


module.exports = userRouter