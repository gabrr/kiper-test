import React from 'react'
import { connect } from 'react-redux'
import './styles.css'

const ConfirmModal = ({ phrase, callback, close }) => {
    return (
        <div id="confirmModal">
            <h1 className="header">Do you really want to {phrase}</h1>
            <div className="row">
                <div className="option1"  onClick={() => callback()}>Yes</div>
                <div className="option2"  onClick={() => close()} >No</div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(ConfirmModal)
