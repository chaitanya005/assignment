import React, { useState } from 'react'
import { connect } from 'react-redux'
import * as actions from '../../actions'



const SearchBar = ({fetchImages}) => {
    const [searchTerm, setSearchTerm] = useState('')

    const handleSearch = (e) => {
        // console.log(e.target.value)
        setSearchTerm(e.target.value)
    }

    return ( 
        <div>
            <input type="text" placeholder = "search" onChange = {(e) => handleSearch(e)}></input>
            <button onClick = {() => fetchImages(searchTerm)}>Search</button>
        </div>
    )
}

export default connect(null, actions)(SearchBar)