import React, { useState } from 'react'
import { connect } from 'react-redux'
import searchIcon from '../../../assets/zoom.png'
import { multipleMatchs } from './multipleMatchs'
import './styles.css'

const SearchBar = props => {
    const { setApts, apts } = props

    const filterItems = ({target}, delay, button) => {
        const { value } = target

        multipleMatchs(value, apts)

        // if(button) {
            
        // } else {

        // }
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
