import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import AXIOS from 'axios'
import React, { useState } from 'react';
import AdminNavbar from './adminnavbar';


function AddProduct() {
    const [Product, setProduct] = useState({
        productname: "",
        productprice: "",
        productdesc: "",
        productquantity: ""
    })

    const [Image, setImage] = useState(null)

    const handleChange = (e) => {
        setProduct({ ...Product, [e.target.name]: e.target.value })
    }

    const handleImage = (e) => {
        setImage(e.target.files[0])
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const formdata = new FormData()

        formdata.append("productName", Product.productName)
        formdata.append("productPrice", Product.productPrice)
        formdata.append("productDescription", Product.productDescription)
        formdata.append("productQuantity", Product.productQuantity)

        if (Image) {
            formdata.append("Image", Image)
        }

        AXIOS.post("http://localhost:9000/api/admin/adminaddproduct", formdata, {
            headers: { "Content-Type": "multipart/formdata" }
        }).then((res) => {
            alert(res.data.message)
        }).catch((err) => {
            console.log(err)
        })

    }

    return (
        <>
            <AdminNavbar />
            <h1>Add Product</h1>
            <Form noValidate onSubmit={handleSubmit}>
                <Row className="mb-3">
                    <Form.Group
                        as={Col}
                        md="4"
                        controlId="validationFormik101"
                        className="position-relative"
                    >
                        <Form.Label>Product Name</Form.Label>
                        <Form.Control
                            type="text"
                            name="productName"
                            onChange={handleChange}
                        />
                        <Form.Control.Feedback tooltip>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group
                        as={Col}
                        md="4"
                        controlId="validationFormik102"
                        className="position-relative"
                    >
                        <Form.Label>Price</Form.Label>
                        <Form.Control
                            type="text"
                            name="productPrice"
                            onChange={handleChange}
                        />

                        <Form.Control.Feedback tooltip>Looks good!</Form.Control.Feedback>
                    </Form.Group>

                </Row>
                <Row className="mb-3">
                    <Form.Group
                        as={Col}
                        md="6"
                        controlId="validationFormik103"
                        className="position-relative"
                    >
                        <Form.Label>Description</Form.Label>
                        <Form.Control
                            type="text"
                            // placeholder="Product Description"
                            name="productDescription"
                            onChange={handleChange}
                        />
                        {/* <Form.Control.Feedback type="invalid" tooltip>
                {errors.city}
              </Form.Control.Feedback> */}
                    </Form.Group>

                    <Form.Group
                        as={Col}
                        md="4"
                        controlId="validationFormik105"
                        className="position-relative"
                    >
                        <Form.Label>Quantity</Form.Label>
                        <Form.Control
                            type="text"
                            // placeholder="Product Quantity"
                            name="productQuantity"
                            onChange={handleChange}
                        />
                    </Form.Group>
                </Row>
                <Form.Group className="position-relative mb-3">
                    <Form.Label>File</Form.Label>
                    <Form.Control
                        type="file"
                        required
                        name="Image"
                        onChange={handleImage}
                    />
                </Form.Group>
                <Button type="submit">Submit form</Button>
            </Form>
        </>
    )
}

export default AddProduct;