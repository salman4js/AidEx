import axios from 'axios';
import React, { useState, useEffect } from 'react'
import Modal from 'react-bootstrap/Modal';


const Posts = (props) => {

    const [rating, setRating] = useState("");
    const [star, setStar] = useState("");
    const [show, setShow] = useState(false);


    const rater = () => {
        setShow(true)
    }

    const handleClose = () => {
        setShow(false);
    }

    const updateRating = () => {
        const credentials = {
            rating : rating,
            id : props.usertoken
        }
        axios.post("http://localhost:3002/ratings", credentials)
        .then(data => {
            console.log(data)
        setShow(false)
        })
    }


    const ratingSystem = () => {
        if (props.rating >= 200) {
            setStar("checked");
            console.log(star)
        }
    }

    useEffect(() => {
        ratingSystem()
    })

    const checking = (e) => {
        e.preventDefault()
        alert("Contact Your Care-Taker  " + props.phonenumber)
    }
    return (
        <div className="post-wrapper">
            <div className="wrapper">
                <div className="container">
                    <div className='row'>
                        <div className='col-sm-6 mx-auto'>
                            <div class="card" >
                            {
                                console.log(props.image)
                            }
                            <img class="card-img-top" src={props.image} alt="Card image cap" />
                                <div class="card-body">
                                    <h5 class="card-title center">{props.username}</h5>
                                    <p className="card-text center"> Current Age :  {props.age}</p>
                                    <p class="card-text center"> Description :  {props.description}</p>
                                    <p className="card-text center">Current Address : {props.address}</p>
                                    <p className="card-text center">Current Location : {props.location}</p>
                                    <p className="card-text center">Gender : {props.gender}</p>
                                    <p className="card-text center">Date : {props.freetime}</p>
                                    <p className="card-text center">Availability-Time : {props.time}</p>

                                    <button type="button" class="btn btn-primary" data-bs-toggle="modal" onClick={rater} data-bs-target="#exampleModal">
                                        Rate this user
                                    </button>
                                    <br />
                                    <br />
                                    <div className="star-rating">
                                        <span class={`fa fa-star ${star}`}></span>
                                        <span class={`fa fa-star ${star}`}></span>
                                        <span class={`fa fa-star ${star}`}></span>
                                        <span class={`fa fa-star ${star}`}></span>
                                        <span class={`fa fa-star ${star}`}></span>
                                    </div>
                                    <br />
                                    <button class="btn btn-primary" onClick={checking}> Contact Your Care-Taker</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Modal
                        show={show}
                        onHide={handleClose}
                        backdrop="static"
                        keyboard={false}
                        ratings={props.rating}
                    >
                        <Modal.Header>
                            <Modal.Title>Modal title</Modal.Title>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close" onClick={handleClose}>
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </Modal.Header>

                        <Modal.Body>
                            <p> Rate this user on the scale of 1 to 10 </p>
                            <input type="text" className = "form-control" placeholder="Ratings" name="rating" value={rating} onChange={((e) => setRating(e.target.value))} />
                            <input type="text" className = "form-control" id = "usermailform" placeholder="Ratings" name="id" value={props.usertoken} readOnly/>

                            <br />
                            <button type = "submit" className = "btn btn-primary" onClick = {updateRating}>
                                Rate 
                            </button>
                        </Modal.Body>
                    </Modal>
                </div>
            </div>
        </div>
    )
}

export default Posts