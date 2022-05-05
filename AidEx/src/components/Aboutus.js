import React from 'react';
import {Link} from "react-router-dom";
import Logo from '../logo1.png';

const Aboutus = () => {
    return (
        <div className="container2" id="about">
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
                            <li className="nav-item active">
                                <Link className="nav-link" to = "/"  style={{color: "white" }} > Home </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to = "/about"  style={{color: "white"}} > About Us </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div className='container'>
                <div className="landing-wrapper">
                    <h1 className="header-landing">
                        About Us!
                    </h1>
                    <p className="content-landing">
                        HelpersBee, is a community developed to take care of elders who are bed-ridden, patients and babies at ease of their comfort at home and where working professionals can leave their inmates in the care of the care-taker. Our moto is we care for others. We provide a platform for those whose seek others to take pf their family and those who are willing to take care of them. It is cent percent legit and trustworthy
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Aboutus