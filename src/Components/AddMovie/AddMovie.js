import React, {useState} from 'react';
import {Button, Modal, Form} from 'react-bootstrap';
 const AddMovie = ({add}) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // inisialState
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [rate, setRate] = useState(""); 
  const [posterUrl, setPosterUrl] = useState("");
  //update State
const handleTitle = (e) => {
 setTitle(e.target.value);
};
const handleDescription = (e) => {
  setDescription(e.target.value);
 };
 const handleRate = (e) => {
  setRate(e.target.value);
 };
 const handlePosterUrl = (e) => {
  setPosterUrl(e.target.value);
 };
// function add movie
const handleMovie = (e) => {
  let newMovie = {title, description, rate, posterUrl};
  add(newMovie);
  handleClose ();
}
  return (
     <div>
       <Button variant="primary" onClick={handleShow}>
        Add Movie
       </Button>

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Label>Title</Form.Label>

          <Form.Control type="text"
           placeholder="Enter movie title" 
           value={title} 
           onChange={(e) => handleTitle(e)} />

          <Form.Label>Description</Form.Label>

          <Form.Control type="text"
           placeholder="Enter description"
           value={description} 
           onChange={(e) => handleDescription(e)} />
          <Form.Label>Rate</Form.Label>
          <Form.Control type="number"
           placeholder="Enter rate"
           value={rate} 
           onChange={(e) => handleRate(e)} />
          <Form.Label>PosterUrl</Form.Label>
          <Form.Control type="URL"
           placeholder="Enter posterUrl"
           value={posterUrl} 
           onChange={(e) => handlePosterUrl(e)} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={() => handleMovie ()}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default AddMovie