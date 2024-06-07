import React, { useState } from 'react'
import Navbar from './Navbar'

const ViewAll = () => {
    const [data,changedata]=useState(
        [
            {"name": "Aju","admnno": "101","rollno": 1},
            {"name": "Akash","admnno": "102","rollno": 2},
            {"name": "Ajun","admnno": "103","rollno": 3},
        ]
    )
    return (
        <div>
            <Navbar/>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            {
                            data.map(
                                (value,index)=>{
                                    return <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
                                    <div class="card">
                                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMDUESMMn2MgF1PXj4S4Bus6acMZ13Yf78FQ&s" class="card-img-top" alt="..."></img>
                                        <div class="card-body">
                                            <h5 class="card-title">Name: {value.name}</h5>
                                            <p class="card-text">Roll No: {value.rollno}</p>
                                            <a href="#" class="btn btn-primary">Go somewhere</a>
                                        </div>
                                    </div>
                                </div>
                                }
                            )
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewAll