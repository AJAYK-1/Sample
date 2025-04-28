const User = require('../model/userModel')


const viewuser = async (req, res) => {
    try {
        const users = await User.find()
        res.json(users)
    } catch (err) {
        console.log(err)
    }
}


module.exports = { viewuser }