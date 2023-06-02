import React from 'react'
import { Card, Button} from 'react-bootstrap';
import MovieRating from '../Rating/Rating';
import { Link } from 'react-router-dom';

const MovieCard = ({movie}) => {
  return (
    <div  >
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={movie.posterUrl}/>
      <Card.Body>
        <Card.Title>{movie.title}</Card.Title>
        <Card.Text>
          {movie.description}
        </Card.Text>
        <MovieRating isMovieRating={true} movieRating={movie.rate}/>
      
        <Link to={`/movie/${movie.id}` }> 
        <Button> Description</Button>
        </Link>
      </Card.Body>
    </Card>
    </div>
  )
}

export default MovieCard