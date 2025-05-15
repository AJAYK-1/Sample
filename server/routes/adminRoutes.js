const express = require('express')
const { viewuser, deleteUser, addProducts } = require('../control/adminControl')


const adminRouter = express.Router()

const path=require('path')

const storage=multer.diskStorage({
    destination:(req,res,cb)=>{
        cb(null,'uploads/')
    },
    filename:(req,file,cb)=>{
        cb(null,Date.now()+path.extname(file.originalname))
    }
})

const uploads=multer({storage})

adminRouter.delete("/userdelete",deleteUser)
adminRouter.post("/adminaddproduct",uploads.single('Image'),addProducts)
adminRouter.get("/adminviewuser",viewuser)
adminRouter.put("/updateproduct/:id",uploads.single('Image'),updateProductbyId)

module.exports = adminRouter