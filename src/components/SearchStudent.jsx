import React, { useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'

const SearchStudent = () => {
    const [data, setdata] = useState(
        {
            "name":""
        }
    )

    const [result, setresult] = useState([])
    const inputHANDLER = (event) => {
        setdata({ ...data, [event.target.name]: event.target.value })
    }

    const searchData = () => {
        console.log(data)
        axios.post("http://localhost:8080/search", data).then(
            (response) => {
                setresult(response.data)
            }
        ).catch(
            (error) => {
                alert(error)
            }
        ).finally()
    }

    const deleteData = (id) => {
        const input= {"_id" : id}
        axios.post("http://localhost:8080/delete",input).then(
            (response) => {
                console.log(response.data)
            if (response.data.status=="Success") {
                alert("Deletion Successful")
            } else {
                alert("Deletion Failed")
            }
        }
        ).catch(
            (error) => {
                alert("Error")
            }
        ).finally()
    }
    return (
        <div>
            <Navbar />
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 xol-xxl-12">
                                <label htmlFor="" className="form-label">
                                    Student Name:
                                </label>
                                <input type="text" className="form-control" name="name" value={data.name} onChange={inputHANDLER} />
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 xol-xxl-12">
                                <button className="btn btn-primary" onClick={searchData}>Search</button>
                            </div>

                            <div className="row">
                                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                    <table class="table">
                                        <thead>
                                            <tr>
                                            <th scope="col">Sl No</th>
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
                                                result.map(
                                                    (value,index) => {
                                                    return  <tbody>
                                                        <tr>
                                                            <th scope="row">{index+1}</th>
                                                            <td>{value.name}</td>
                                                            <td>{value.admnno}</td>
                                                            <td>{value.rollno}</td>
                                                            <td>{value.pname}</td>
                                                            <td>{value.cname}</td>
                                                            <td>{value.dob}</td>
                                                            <td>{value.email}</td>
                                                            <td>{value.password}</td>
                                                            <td><button className="btn btn-danger" onClick={()=>{deleteData(value._id)}}>Delete</button></td>
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
            </div>
        </div>
    )
}

export default SearchStudent