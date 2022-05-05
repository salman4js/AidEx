import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
import Logo from '../logo1.png';
import Typed from 'react-typed';


const Landingpage = () => {

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [userid, setUserid] = useState();

    const processData = (e) => {
        e.preventDefault();
        const credentials = {
            email : email,
            password : password
        }
        axios.post("http://localhost:3002/login", credentials)
        .then(res => {if(res.data === "No user has been found"){
            alert("No user has been found")
        } else if(res.data === "Password doesn't match!"){
            alert("Password doesn't match!")
        } else {
            axios.get("http://localhost:3002/")
            .then(res => setUserid(res.data))
            .then(res1 => console.log(res.data))
            console.log(userid);
            navigateScreen(credentials);
        }
    })
    }

    const navigateScreen = (credentials) => {
        userid.map((item,key) => {
            key = {key}
            if(item.email === credentials.email){
                console.log(item.email)
                console.log(credentials.email)
                window.location = "/landingpage/"+item._id
            }
        })
    }

    return (
        <div className="container">
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
                                <Link className="nav-link" to="/" style={{ color: "white" }} > Home </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about" style={{ color: "white" }} > About Us </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div className="body-wrapper">
                <div className="container">
                    <div className="landing-wrapper">
                        <div className='row'>
                            <div className='col-sm-6'>
                                <div className="header">
                                    <h1 className ="header-landing" >
                                        AidEx
                                        <Typed
                                            className="spanlanding"
                                            strings={[" For Care"]}
                                            typeSpeed={140}
                                            backspeed={140}
                                            loop
                                        />
                                    </h1>
                                    
                                    <p className="content-landing">
                                        <b className='hola'>Hola!</b> We are excited adn delighted to help you. We provide elegant and simple solution for your problem in finding a care-taker to baby sit your babies and elders.
                                    </p>
                                </div>
                            </div>

                            <div className='col-sm-6'>
                                <div className='buttons'>
                                    <form onSubmit = {processData}>
                                        <div class="form-group">
                                            <label for="exampleInputEmail1" style={{ color: "white" }} >Email address</label>
                                            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" name = "email" value = {email} onChange = {((e) => setEmail(e.target.value))} />
                                        </div>
                                        <div class="form-group">
                                            <label for="exampleInputPassword1" style={{ color: "white" }}>Password</label>
                                            <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" name = "password" value = {password} onChange = {((e) => setPassword(e.target.value))} />
                                        </div>
                                        <button type="submit" class="btn btn-primary">Submit</button>
                                        <br />
                                        <br />
                                        <Link className = "signinlink" to = "/signin"> Dont have an account? Sign In Here! </Link>

                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Landingpage