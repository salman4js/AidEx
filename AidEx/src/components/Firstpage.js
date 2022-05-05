
import axios from 'axios';
import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Logo from '../logo1.png';
import Modal from 'react-bootstrap/Modal';
import Alert from 'react-bootstrap/Alert';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';


const Firstpage = () => {

    const [phonenumber, setPhonenumber] = useState();
    const [username, setUsername] = useState();
    const [age, setAge] = useState();
    const [aadharcard, setAadharcard] = useState();
    const [description, setDescription] = useState();
    const [address, setAddress] = useState();
    const [tags, setTags] = useState();
    const [gender, setGender] = useState();
    const [freetime, setFreetime] = useState();
    const [time, setTime] = useState();

    
    // Modals
    const [show, setShow] = useState(false);

    // Alert Message Box

    const [alert, setAlert] = useState(false);

    // Error text

    const [errormsg, setErrormsg] = useState("");

    // extract id from an url

    const { id } = useParams();

    console.log(id);


    // Loading Modal Dialog Box

    const handleClose = () => setShow(false);

   
    const processData = (e) => {
        e.preventDefault();
        

        const credentials = {
            id: id,
            phonenumber: phonenumber,
            username: username,
            age: age,
            aadharcard: aadharcard,
            description: description,
            address: address,
            tags: tags,
            gender: gender,
            freetime: freetime,
            time : time
        }

        if (phonenumber.length <= 10 && age <= 40 && age >= 18 && aadharcard.length <= 12 && description !== undefined) {
            axios.post("http://localhost:3002/firstpage", credentials)
                .then(res => console.log(res.data))
            setShow(true);
            setTimeout(navigatePage, 10000)
        } else {
            setErrormsg("Re-Check Your Data Properly!")
            setAlert(true)
        }
    }

    const navigatePage = () => {
        window.location = "/hiring/" + id
    }

    return (
        <div className='container1'>
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
                                <Link className="nav-link" to="/about" style={{ color: "white" }} > About Us </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={{ pathname: "/contact/" + id }} style={{ color: "white" }} > Contact Us </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div className='signinalignment1'>
                <div className="container">
                    <form onSubmit={processData}>
                        <div class="form-group">
                            <label for="exampleFormControlInput1" style={{ color: "white" }}> Phone Number </label>
                            <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Contact Number" name="phonenumber" value={phonenumber} onChange={((e) => setPhonenumber(e.target.value))} />
                        </div>
                        <div class="form-group">
                            <label for="exampleFormControlInput1" style={{ color: "white" }}> User Name </label>
                            <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Enter your username" name="username" value={username} onChange={((e) => setUsername(e.target.value))} />
                        </div>
                        <div class="form-group">
                            <label for="exampleFormControlSelect1" style={{ color: "white" }}> Enter Your Current Age </label>
                            <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Current Age" name="age" value={age} onChange={((e) => setAge(e.target.value))} />
                        </div>
                        <div class="form-group">
                            <label for="exampleInputPassword1" style={{ color: "white" }}> Aadhar Card Number</label>
                            <input type="text" class="form-control" id="exampleInputPassword1" placeholder="Aadhar Card" name="aadharcard" value={aadharcard} onChange={((e) => setAadharcard(e.target.value))} />
                        </div>

                        <Modal
                            show={show}
                            onHide={handleClose}
                            backdrop="static"
                            keyboard={false}
                        >
                            <Modal.Body>
                                Loading, Please wait while we are redirecting you to your timeline
                            </Modal.Body>
                        </Modal>
                        <div class="form-group">
                            <label for="exampleFormControlTextarea1" style={{ color: "white" }}> Why are you voluntaring for care taking job? </label>
                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="1" name="description" value={description} onChange={((e) => setDescription(e.target.value))}></textarea>
                        </div>
                        <div class="form-group">
                            <label for="exampleFormControlInput1" style={{ color: "white" }}> Gender </label>
                            <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Gender" name="gender" value={gender} onChange={((e) => setGender(e.target.value))} />
                        </div>
                        <div class="form-group">
                            <label for="exampleFormControlInput1" style={{ color: "white" }}> Mention Date </label>

                            <DatePicker selected={freetime} onChange={(e) => setFreetime(e)} dateFormat = "dd/MM/yyyy" minDate = {new Date()} /> 
                            <br />
                            <br />
                            <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Available Timing" name="tags" value={time} onChange={((e) => setTime(e.target.value))} />

                       </div>
                        <div class="form-group">
                            <label for="exampleFormControlInput1" style={{ color: "white" }}> Location </label>
                            <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Enter your location" name="tags" value={tags} onChange={((e) => setTags(e.target.value.toLowerCase()))} />
                        </div>
                        <div class="form-group">
                            <label for="exampleFormControlTextarea1" style={{ color: "white" }}> Your Current Address </label>
                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="1" placeholder="Address" name="address" value={address} onChange={((e) => setAddress(e.target.value))}></textarea>
                        </div>
                        <button type="submit" class="btn btn-primary">Submit</button>

                        <br />
                        <br />
                        <Alert variant="danger" show={alert}
                            onClose={() => setAlert(false)} dismissible>
                            <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
                            <p>
                                {errormsg}
                            </p>
                        </Alert>
                        <br />
                        <br />
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Firstpage