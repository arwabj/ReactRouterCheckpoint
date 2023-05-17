import React from 'react'
import {Form} from 'react-bootstrap'


const FilterByName = ({InputSearch, setInputSearch }) => {
  return (
    <div>
        <Form.Control type="text" 
        placeholder="Enter movie title.."
        value={InputSearch}
        onChange={(e)=> setInputSearch(e.target.value)}
        />

    </div>
  )
}

export default FilterByName