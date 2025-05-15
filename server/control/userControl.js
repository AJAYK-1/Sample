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
    } catch (err) {
        console.log(err)
    }
}


const viewproducts = async (req, res) => {
    try {
        const products = await Product.find()
        res.json(products)
    } catch (err) {
        console.log(err)
    }
}


const addCart = async (req, res) => {
    const userId = req.headers.userId
    const { productId, Quantity } = req.body
    try {
        const cart = await Cart.findOne({ userId: userId })
        if (cart) {
            const productIndex = cart.product.findIndex(p =>
                p.productId == productId
            )
            if (productIndex > -1) {
                cart.product[productIndex].quantity += Quantity || 1
            } else {
                cart.product.push({ productId, quantity: Quantity })
            }
            await cart.save()
        } else {
            const cart = await Cart({
                userId,
                product: [{
                    productId,
                    quantity: Quantity || 1
                }]
            })
            await cart.save()
        }
        res.json("Product Added to cart successfully")
    } catch (err) {
        console.log(err)
    }
}


const fetchCartById = async (req, res) => {
    try {
        const userId = req.headers.id;
        const cartItems = await Cart.findOne({ userId }).populate('product.productId')
        res.json(cartItems)
    } catch (err) {
        console.log(err)
    }
}


const createOrder = async (req, res) => {
    try {
        const userId = req.headers.id
        const { cartId, totalAmount, payment, address } = req.body
        const order = await order({
            userId,
            cartId,
            totalAmount,
            payment,
            address,
            status: "Order Placed"
        })
        await orders.save()
        const cartItem = await Cart.findOne({ _id: cartId })
        cartItem.status = "Ordered"
        cartItem.save()
        res.json({ message: "Order successfull", status: 200 })
    } catch (err) {
        console.log(err)
    }
}


const viewOrder=async(req,res)=>{
    try{
         const userId=req.headers.id
         const orders=await Order.findOne({userId}).populate({
          path:"cartId",
          populate:{
             path:"product.productId"
          },
         })
         console.log(orders)
         res.json(orders)
    }catch(err){
       console.log(err)
    }
 }
 


module.exports = { registerUser, loginuser, viewproducts, addCart, createOrder, fetchCartById,viewOrder }