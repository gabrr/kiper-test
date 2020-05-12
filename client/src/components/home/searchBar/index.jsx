import React from 'react'
import { connect } from 'react-redux'
import './styles.css'

const searchBar = () => {
    return (
        <div id="searchBar">
            <input type="search" name="search" id="search"/>
        </div>
    )
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(searchBar)
