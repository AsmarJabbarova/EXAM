import React, { useEffect, useState } from 'react'
import './Add.scss'
import { Formik, Form, Field } from 'formik';
import { Helmet } from "react-helmet";
import * as Yup from 'yup';
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
const Shema = Yup.object().shape({
    name: Yup.string().required(' Name is Required'),
    title: Yup.string().required('Title is Required'),
    img: Yup.string().required('Img is Required'),
    price: Yup.string().required('Price is Required')

})


function Add() {
    const [add, setAdd] = useState([])
    const [post, setPost] = useState([])


    useEffect(() => {
        axios.get("http://localhost:5050/products").then((res) => {
            setAdd(res.data)
        })
    })


    return (
        <>
            <div className="mainAdd">
                <Helmet>
                    <title>Add</title>
                </Helmet>
                <div className="formk">
                    <Formik initialValues={{
                        name: "",
                        title: "",
                        img: "",
                        price: 0
                    }}
                        validationSchema={Shema}
                        onSubmit={(value) => {
                            axios.post('http://localhost:5050/products', value).then((res) => {
                                setPost(res.data)
                                setAdd(setPost)
                            })
                        }}
                    >
                        {/* setAdd(res.data) */}
                        {({ errors, touched }) => (
                            <Form>

                                <Field type="text" placeholder='Name' name="name" /> <br />
                                {errors.name && touched.name && (<div className='err'>{errors.name}</div>)}
                                <Field type="text" placeholder='Title' name="title" /><br />
                                {errors.title && touched.title && (<div className='err'>{errors.title}</div>)}
                                <Field type="text" placeholder='Image' name="img" /><br />
                                {errors.img && touched.img && (<div className='err'>{errors.img}</div>)}
                                <Field type="number" placeholder='Price' name="price" /><br />
                                {errors.price && touched.price && (<div className='err'>{errors.price}</div>)}
                                <button type='submit'>Add</button>
                            </Form>
                        )}



                    </Formik>
                </div>

                <div className="tablee">
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Title</th>
                                <th>ImageLink</th>
                                <th>Price</th>
                                <th>Buttons</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                add?.map((elem, i) => (
                                    <tr key={i}>
                                        <td>{elem._id}</td>
                                        <td>{elem.name}</td>
                                        <td>{elem.title}</td>
                                        <td>{elem.img}</td>
                                        <td>{elem.price}</td>
                                        <td><button onClick={() => {
                                            axios.delete(`http://localhost:5050/products/${elem._id}`).then(() => {
                                                axios('http://localhost:5050/products').then((res) => {
                                                    setAdd(res.data)
                                                })
                                            })
                                        }}>Delete</button></td>

                                    </tr>
                                ))
                            }



                        </tbody>
                    </Table>
                </div>
            </div>




        </>
    )
}

export default Add