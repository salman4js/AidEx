import React, { useEffect, useRef, useState} from 'react';
import { Link, useParams } from 'react-router-dom';
import Logo from '../logo1.png';
import emailjs from 'emailjs-com';
import axios from 'axios';

const Contactus = () => {

  const { id } = useParams();

  const [usermail, setUsermail] = useState();

  ///console.log(id);
  useEffect(() => {
    getUser()
  }, [])

  const getUser = () => {
    console.log(id)
    
    axios.get("http://localhost:3002/usermail/"+id)
    .then(data => data.data)
    .then(data1 => setUsermail(data1.email))
  }

  const formRef = useRef()

  const querySearch = (e) => {
    e.preventDefault()
    emailjs.sendForm('service_z55fw4v', 'template_1wp0ckl', formRef.current, 'user_ftwyetwxRBPiw8t4lKyOd')
  .then((result) => {
      console.log(result.text);
  }, (error) => {
      console.log(error.text);
  });
  }

  return (
    <div className='container1'>
      <div className='container'>
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
                  <Link className="nav-link" to="/" style={{ color: "white" }} > Home </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/about" style={{ color: "white" }} > About Us </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className = "querySearch">
          <form ref = {formRef} onSubmit = {querySearch}>
            <div class="form-group">
              <label className = "query" for="exampleInputEmail1" style={{ color: "white" }} ><b>How can we help you?</b></label>
              <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Send your query to us" name="query" />
            </div>
            <div class="form-group" id = "usermailform">
              <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="User mail id" value = {usermail} name="query" readOnly/>
            </div>
            <button className = "btn btn-primary" type = "submit"> Send </button>
          </form>
        </div>
        
      </div>
    </div>
  )
}

export default Contactus