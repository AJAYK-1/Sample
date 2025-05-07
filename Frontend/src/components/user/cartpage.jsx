import React, { useState } from 'react'
import Navbaruser from './userNavbar'
import { useEffect } from 'react'
import AXIOS from 'axios'
import {jwtDecode} from 'jwt-decode'
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'
export default function Cartpage() {
  
  const [cart,setCart]=useState([])
  const [payment,setPayment]=useState("")
  const [address,setAddress]=useState("")

  useEffect(()=>{
     const token=jwtDecode(localStorage.getItem('token'))
     console.log(token)
     AXIOS.get("http://localhost:9000/api/user/viewcartbyid",{headers:{
      id:token.id
     }}).then((res)=>{
      // console.log(res.data)
      setCart(res.data.product)
     }).catch((err)=>{
      console.log(err)
     })
  },[])
  console.log("cart",cart)

  const totalAmount = cart.reduce((sum,item)=>{
    return sum + item.quantity *item.productId.productPrice},0)
  return (
 <>
 <Navbaruser/>
 <h1>Cart Page</h1>
 <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Product</th>
          <th>Product Name</th>
          <th>Quantity</th>
          <th>Totalprice</th>
        </tr>
      </thead>
      <tbody>
        {cart.map((items,index)=>{
          return(
            <tr key={items._id}>
              <td>{index+1}</td>
              <td><img src={`http://localhost:9000/uploads/${items.productId.Image}`} alt="" style={{height:"100px",width:"100px"}} /></td>
              <td>{items.productId.productName}</td>
              <td>{items.quantity}</td>
              <td>{items.quantity * items.productId.productPrice}</td>
            </tr>
          )
        })}
      </tbody>
    </Table>

    <h2>TotalAmount : Rs.{totalAmount}</h2>

   <Form>
   <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Enter Delivery address</Form.Label>
        <Form.Control as="textarea" rows={3} name="deliveryaddress" />
      </Form.Group>
      <Form.Check
            inline
            label="COD"
            name="payment"
            type='radio'
            value={"COD"}
          />
          <Form.Check
            inline
            label="Online Payment"
            name="payment"
             type='radio'
             value={"Online paymenmt"}
          />

      <Button variant="primary">
      Place Order
      </Button>
   </Form>
 </>
  )
}