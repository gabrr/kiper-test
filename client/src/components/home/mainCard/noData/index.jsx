import React from 'react'
import { connect } from 'react-redux'
import './styles.css'

export const NoData = ({ addADweller }) => {
    return (
        <div id="nodata">
           <p>No dwellers yet.</p>
            <p className="btAction" onClick={() => addADweller()} >+ Add a dweller</p>
        </div>
    )
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(NoData)
