import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { Link, useParams } from "react-router-dom";
import Logo from '../logo1.png';
import Posts from './Posts';

const Hiring = () => {

    const [userdata, setUserdata] = useState([]);

    const [location, setLocation] = useState("");

    const { id } = useParams();

    console.log(id);

    const addLocation = (e) => {
        e.preventDefault();
    }

    const fetchData = () => {
        axios.get("http://localhost:3002/")
            .then(res => [setUserdata(res.data)])
            .catch(err => {
                console.log(err);
            })
        console.log(userdata);
    }



    useEffect(() => {
        fetchData();
    }, [])




    return (
        <div className="containernew">
            <nav className="navbar navbar-expand-lg navbar-dark shadow-5-strong">
                <div className="container">
                    <a className="navbar-brand" href="#">
                        <img src={Logo} width="150" height="100" className="d-inline-block align-top" alt="" />
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto"  >
                            <li className="nav-item">
                                <Link className="nav-link" to={{pathname : "/landingpage/"+id}} style={{ color: "white" }} > Home </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about" style={{ color: "white" }} > About Us </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={{pathname : "/contact/"+id}} style={{ color: "white" }} > Help Center </Link>
                            </li>
                        </ul>
                    </div>
                    <form class="form-inline my-2 my-lg-0" onSubmit={addLocation}>
                        <input class="form-control mr-sm-2" type="search" placeholder="Search by location" aria-label="Search" name = "location" value = {location} onChange = {((e)=>setLocation(e.target.value.toLowerCase()))} />
                            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </div>
            </nav>
            <div className = "hiring-wrapper">
            <div>
            

            </div>
              {
                 userdata.filter((val) => {
                   if(location == ""){
                      return val
                   } else if(val.tags.includes(location)) {
                     return val
                   }
                 }).map((item,key) => {
                   if(item.description !== undefined){
                    console.log(item.images)
                        return (
                            <Posts key = {key} image = {item.image} usertoken = {item._id} rating = {item.rating} time = {item.time} username = {item.username} age = {item.age} location = {item.tags} freetime = {item.freetime} gender = {item.gender} address = {item.address} description = {item.description} phonenumber = {item.phonenumber}/>
                        )   
                   }
                                
                 })
              }
            </div>

        </div>
    )
}

export default Hiring
