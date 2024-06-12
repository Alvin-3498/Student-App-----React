import React, { useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'

const AddStudent = () => {
    const [data,setData] = useState(
        [
            {
                "name": "",
                "admnno": "",
                "rollno": "",
                "pname": "",
                "cname": "",
                "dob": "",
                "email": "",
                "password": "",
            }
        ]
    )
    const inputHANDLER = (event) => {
        setData({ ...data,[event.target.name]:event.target.value})
    }

    const readData = () => {
    
        axios.post("http://localhost:8080/add",data).then(
            (response) => {
                console.log(response.data)
        if (response.data.status == "Success") {
            alert("Success")
        } else {
            alert("error")
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
                        <div className="col col-12 col-sm-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">
                                Name:
                            </label>
                            <input type="text" className="form-control" name="name" value={data.name} onChange={inputHANDLER} />
                        </div>
                        <div className="col col-12 npmcol-sm-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">
                                Admission No:
                            </label>
                            <input type="text" className="form-control" name="admnno"  value={data.admnno} onChange={inputHANDLER} />
                        </div>
                        <div className="col col-12 col-sm-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">
                                Roll No:
                            </label>
                            <input type="text" className="form-control" name="rollno" value={data.rollno} onChange={inputHANDLER} />
                        </div>
                        <div className="col col-12 col-sm-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">
                                Parent Name:
                            </label>
                            <input type="text" className="form-control" name="pname" value={data.pname} onChange={inputHANDLER} />
                        </div>
                        <div className="col col-12 col-sm-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">
                                College Name:
                            </label>
                            <input type="text" className="form-control" name="cname" value={data.cname} onChange={inputHANDLER} />
                        </div>
                        <div className="col col-12 col-sm-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">
                                Date of Birth:
                            </label>
                            <input type="date" className="form-control" name="dob" value={data.dob} onChange={inputHANDLER} />
                        </div>
                        <div className="col col-12 col-sm-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">
                                Email Id:
                            </label>
                            <input type="text" className="form-control" name="email" value={data.email} onChange={inputHANDLER} />
                        </div>
                        <div className="col col-12 col-sm-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">
                                Password:
                            </label>
                            <input type="text" id="" className="form-control" name="password" value={data.password} onChange={inputHANDLER} />
                        </div>
                        <div className="col col-12 col-sm-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <button className="btn btn-success" onClick={readData}>Register</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
)
}

export default AddStudent