const express = require('express')
const { viewuser } = require('../control/adminControl')


const adminRouter = express.Router()


adminRouter.get("/adminviewuser",viewuser)


module.exports = adminRouter