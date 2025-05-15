const mongoose = require('mongoose')

const orderSchema = new mongoose.Schema({
    cartId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "cart_tbl"
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user_tbl"
    }
})