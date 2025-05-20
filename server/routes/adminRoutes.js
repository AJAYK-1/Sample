const express = require('express')
const { viewuser, deleteUser, addProducts, updateProductbyId, viewproduct, viewproductbyid } = require('../control/adminControl')
const multer=require('multer')

const adminRouter = express.Router()

const path = require('path')

const storage = multer.diskStorage({
    destination: (req, res, cb) => {
        cb(null, 'uploads/')
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname))
    }
})

const uploads = multer({ storage })

adminRouter.delete("/userdelete", deleteUser)
adminRouter.post("/adminaddproduct", uploads.single('Image'), addProducts)
adminRouter.get("/adminviewusers", viewuser)
adminRouter.put("/updateproduct/:id", uploads.single('Image'), updateProductbyId)
adminRouter.get("/adminviewproducts",viewproduct)
adminRouter.get("/admineditproduct/:id",viewproductbyid)


module.exports = adminRouter