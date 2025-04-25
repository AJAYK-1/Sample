import React, { useState } from 'react'
import AXIOS from 'axios'

export default function Registerpage() {
    const [record, setRecord] = useState({
        username: "",
        email: "",
        password: ""
    })

    const [errors, setErrors] = useState({})

    const handleChange = (e) => {
        setRecord({ ...record, [e.target.name]: e.target.value })
    }

    const validate = () => {
        const newErrors = {}
        if (!record.username.trim()) {
            newErrors.username = "Username is required"
        } else if (!/^[A-Za-z]+$/.test(record.username)) {
            newErrors.username = "Username should contain only letters"
        }

        if (!record.email) {
            newErrors.email = "Email is required"
        } else if (!/\S+@\S+\.\S+/.test(record.email)) {
            newErrors.email = "Email is invalid"
        }

        if (!record.password) {
            newErrors.password = "Password is required"
        } else if (record.password.length < 6) {
            newErrors.password = "Password must be at least 6 characters long"
        }

        setErrors(newErrors)
        return Object.keys(newErrors).length === 0
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (validate()) {
            AXIOS.post("http://localhost:9000/api/user/registeruser", record)
                .then((res) => {
                    console.log(res.data)
                    alert("User registered successfully")
                    setRecord({ username: "", email: "", password: "" }) // Clear form
                }).catch((err) => {
                    console.log(err)
                    alert("User registration failed")
                })
        }
    }

    return (
        <>
            <h1>Registration Page</h1>
            <form onSubmit={handleSubmit}>
                <p>
                    <input
                        type="text"
                        name="username"
                        placeholder='Enter user name'
                        onChange={handleChange}
                        value={record.username}
                    />
                    {errors.username && <span style={{ color: 'red' }}>{errors.username}</span>}
                </p>
                <p>
                    <input
                        type="email"
                        name='email'
                        placeholder='Enter the emailid'
                        onChange={handleChange}
                        value={record.email}
                    />
                    {errors.email && <span style={{ color: 'red' }}>{errors.email}</span>}
                </p>
                <p>
                    <input
                        type="password"
                        name="password"
                        placeholder='Enter the password'
                        onChange={handleChange}
                        value={record.password}
                    />
                    {errors.password && <span style={{ color: 'red' }}>{errors.password}</span>}
                </p>
                <p><input type="submit" value={"Register"} /></p>
            </form>
        </>
    )
}
