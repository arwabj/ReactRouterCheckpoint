import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import {moviesData} from "../../Constant/Data";

const MovieDesc = () => {
    const params = useParams ()
     const [movie, setMovie] = useState({});
     const navigate = useNavigate ();
     useEffect (()=> { 
        setMovie(moviesData.find ((movie)=> movie.id === +params.id))
     },[params.id])

  return (
    <div>
        <Container>
            <Row>
                <Col sm={7}>
                   <div>
                       <h1> Description of: {movie.title} </h1>
                       {movie.description}
                       <Button 
                        style={{marginTop: "120px", width: "300px"}} 
                        variant='secondary' onClick={()=>navigate(-1)}>Go Back
                        </Button>
                   </div>
                </Col>
                <Col sm={5}>

                    <iframe title='this is a unique title key'
                            style={{width: "400px", height:"400px"}} 
                            src={movie.trailer}/>  

                </Col>

            </Row>
        </Container>
        

    </div>
  )
}

export default MovieDesc;