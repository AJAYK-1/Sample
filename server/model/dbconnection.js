const mongoose = require('mongoose')


const dbConnect = async () => {
    try {
        await mongoose.connect("mongodb://localhost:27017/Newdb")
        console.log("Database Connected Successfully...")
    } catch (err) {
        console.log("Error Occured...", err)
    }
}

module.exports = dbConnect