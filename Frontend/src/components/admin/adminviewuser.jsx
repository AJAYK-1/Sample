import React, { useEffect, useState } from "react";
import AXIOS from 'axios'


function AdminViewUser() {
    const [user, setUser] = useState([])
    useEffect(() => {
        AXIOS.get("http://localhost:9000/api/admin/adminviewuser")
            .then((res) => {
                console.log(res.data)
                setUser(res.data)
            }).catch((err) => {
                console.log(err)
            })
    }, [])


    return (
        <>
            <h1>Users</h1>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Username</th>
                        <th>Email</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {user.map((customer, index) => {
                        return (
                            <tr key={customer._id}>
                                <td>{index + 1}</td>
                                <td>{customer.Username}</td>
                                <td>{customer.Email}</td>
                                <td><Button variant="danger">Delete</Button></td>
                            </tr>
                        )
                    })}
                </tbody>
            </Table>
        </>
    )

}


export default AdminViewUser