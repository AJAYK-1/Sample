const express = require('express')
const app = express()
const dbConnect = require('./model/dbconnection')
const cors = require('cors')


app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

dbConnect()

const userRouter = require('./routes/userRoutes')
app.use('/api/user', userRouter)


const adminRouter = require('./routes/adminRoutes')
app.use('/api/admin',adminRouter)

app.use('/uploads',express.static('uploads'))

app.listen(9000, () => {
    console.log("Server Started Successfully...")
})