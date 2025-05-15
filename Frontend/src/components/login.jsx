import React, { useState } from 'react'
import AXIOS from 'axios'

export default function LoginPage() {
    const [record, setRecord] = useState({
        email: "",
        password: ""
    })

    const [errors, setErrors] = useState({})

    const handleChange = (e) => {
        setRecord({ ...record, [e.target.name]: e.target.value })
    }

    const validate = () => {
        const newErrors = {}

        if (!record.email) {
            newErrors.email = "Email is required"
        } else if (!/\S+@\S+\.\S+/.test(record.email)) {
            newErrors.email = "Email is invalid"
        }

        if (!record.password) {
            newErrors.password = "Password is required"
        }

        setErrors(newErrors)
        return Object.keys(newErrors).length === 0
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (validate()) {
            AXIOS.post("http://localhost:9000/api/user/loginuser", record)
                .then((res) => {
                    console.log(res.data)
                    alert("Login successful")
                    localStorage.setItem("token",res.data.token)
                    setRecord({ email: "", password: "" }) // Reset form
                }).catch((err) => {
                    console.log(err)
                    alert("Login failed")
                })
        }
    }

    return (
        <>
            <h1>Login Page</h1>
            <form onSubmit={handleSubmit}>
                <p>
                    <input
                        type="email"
                        name="email"
                        placeholder='Enter your email'
                        onChange={handleChange}
                        value={record.email}
                    />
                    {errors.email && <span style={{ color: 'red' }}>{errors.email}</span>}
                </p>
                <p>
                    <input
                        type="password"
                        name="password"
                        placeholder='Enter your password'
                        onChange={handleChange}
                        value={record.password}
                    />
                    {errors.password && <span style={{ color: 'red' }}>{errors.password}</span>}
                </p>
                <p><input type="submit" value="Login" /></p>
            </form>
        </>
    )
}
