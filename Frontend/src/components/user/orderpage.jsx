import React from 'react'
import Navbaruser from './usernavbar'
import { useState,useEffect } from 'react'
import axios  from 'axios'
import { jwtDecode } from 'jwt-decode'
import UserNavbar from './usernavbar'
export default function Orderpage() {
  const [order,setOrder]=useState([])

  useEffect(()=>{
    const token=jwtDecode(localStorage.getItem('token'))
    axios.get("http://localhost:9000/api/user/vieworders",{headers:{
      id:token.id
    }}).then((res)=>{
      console.log(res.data)
      setOrder(res.data)
    }).catch((err)=>{
      console.log(err)
    })
  },[])

  return (
    <>
    <UserNavbar/>
    <h1>Order</h1>

    </>
  )
}