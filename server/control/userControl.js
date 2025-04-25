const User = require('../model/userModel')

const registerUser = async (req, res) => {
    try {
        const { username, email, password } = req.body
        const data = await User({
            username,
            email,
            password
        })
        await data.save()
        res.json("Data Recieved Successfully...")
    } catch (err) {
        console.log(err)
    }
}


const loginuser = async (req, res) => {
    try {
        const { email, password } = req.body
        const loguser = await User.findOne({ Email: email })
    } catch(err) {
        console.log(err)
    }
}


module.exports = { registerUser, loginuser }