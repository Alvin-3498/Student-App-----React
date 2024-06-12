import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'

const ViewAll = () => {
    const [data,changedata] = useState([])
    const fetchdata = () => {
        axios.get("http://localhost:8080/view").then(
            (response) => {
                changedata(response.data)
            }
        ).catch(
            (error) => {
                console.log(error.message)
                alert("Error")
            }
        ).finally()
    }
    useEffect(() => { fetchdata() }, [])
    return (
        <div>
            <Navbar />
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            <table className="table">
                                  <thead>
                                    <tr>
                                        <th scope="col">Name</th>
                                        <th scope="col">Admn No</th>
                                        <th scope="col">Roll No</th>
                                        <th scope="col">Parent Name</th>
                                        <th scope="col">College Name</th>
                                        <th scope="col">DOB</th>
                                        <th scope="col">Email ID</th>
                                        <th scope="col">Password</th>
                                    </tr>
                                </thead>
                                    {
                                        data.map(
                                            (value,index) => {
                                                return  <tbody>
                                    <tr>
                                        <td scope="row">{value.name}</td>
                                        <td>{value.admnno}</td>
                                        <td>{value.rollno}</td>
                                        <td>{value.pname}</td>
                                        <td>{value.cname}</td>
                                        <td>{value.dob}</td>
                                        <td>{value.email}</td>
                                        <td>{value.password}</td>
                                    </tr>
                                </tbody>
                                         }
                                )
                                        }
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewAll