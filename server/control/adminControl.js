const User = require('../model/userModel')


const viewuser = async (req, res) => {
    try {
        const users = await User.find()
        res.json(users)
    } catch (err) {
        console.log(err)
    }
}


const deleteUser = async (req, res) => {
    try {
        const id = req.headers.userid
        console.log(id)
        await User.findByIdAndDelete({ _id: id })
        res.json("User Deleted Successfully")
    } catch (err) {
        console.log(err)
    }
}





module.exports = { viewuser, deleteUser }