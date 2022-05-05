import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import Logo from '../logo1.png';
import Modal from 'react-bootstrap/Modal';
import "bootstrap/dist/css/bootstrap.min.css";

const Image = () => {

    const { id } = useParams();

    const [show, setShow] = useState(false);
    const [previewSource, setPreviewSource] = useState("");
    const [image, setImage] = useState("");
    const [selectedFile, setSelectedFile] = useState('')

    const handleImage = (e) => {
        console.log("Submitting!!")
        const file = e.target.files[0];
        setSelectedFile(file)

        previewFile(file)
    }

    const previewFile = (file) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            setPreviewSource(reader.result)
        }
    }

    const uploadImage = (base) => {
        console.log(base);
    }

    // uploadImage(previewSource);

    const processData = (e) => {
        e.preventDefault();
        console.log("Hey, its printing!")
        uploadImage(previewSource);

        const credentials = {
            id: id,
            image: previewSource
        }

        if (!previewSource) {
            alert("Please select your image!")
        } else {
            axios.post("http://localhost:3002/profile", credentials)
                .then(data => {
                    console.log(data)
                })
            setShow(true);
        }
    }

    const handleClose = () => {
        setShow(false);
    }

    const navigation = () => {
        window.location = "/firstpage/"+id
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
                        <ul className="navbar-nav ml-auto">
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

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Body>
                    Profile Photo Successfully Updated!
                </Modal.Body>
                <Modal.Footer>
                    <button className = "btn btn-primary" onClick={navigation}> OK </button>
                </Modal.Footer>
            </Modal>
            {/* <div className = "image-js">
                        <form>
                        {previewSource && (
                            <img src={previewSource} alt="choosen" style={{ height: '200px' }} />
                        )}
                        <div class="form-group">
                            <label for="exampleFormControlInput1" style={{ color: "white" }}> Upload Your Image </label>
                            <br />
                            <input
                                id="fileInput"
                                type="file"
                                name="image"
                                onChange={handleImage}
                                value={image}
                                className="form"
                                style={{ color: 'white' }}
                            />

                        </div>
                        <button type="submit" class="btn btn-primary">Submit</button>
                        <br />
                        <br />
                    </form>
                </div> */}
            <div className="image-js">
                <div class="card" style={{ width: '50vh' }} >
                    {previewSource && (
                        <img class="card-img-top" src={previewSource} style={{ height: '250px' }} />

                    )}
                    <div class="card-body">
                        <form onSubmit={processData}>
                            <div class="form-group">
                                <label for="exampleFormControlInput1" style={{ color: "black" }}> Upload Your Image </label>
                                <br />
                                <input
                                    id="fileInput"
                                    type="file"
                                    name="image"
                                    onChange={handleImage}
                                    value={image}
                                    className="form"
                                    style={{ color: 'white' }}
                                />

                            </div>
                            <button type="submit" class="btn btn-primary">Submit</button>
                            <br />
                            <br />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Image