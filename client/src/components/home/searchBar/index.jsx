import React, { useState } from 'react'
import { connect } from 'react-redux'
import searchIcon from '../../../assets/zoom.png'
import './styles.css'

const SearchBar = props => {
    const [searchInput, setSearchInput] = useState('')

    const filterItems = ({target}, delay, button) => {
        if(button) {
            
        } else {
            setSearchInput(target.value)

        }
    }

    return (
        <div id="searchBar">
            <input type="text" onChange={(e) => filterItems(e, 200, false)} placeholder="Search for a condo-dweller"/>
            <img onClick={(e) => filterItems(e, 0, true)} src={searchIcon} id="searchIcon" alt="a search icon"/>
        </div>
    )
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar)
