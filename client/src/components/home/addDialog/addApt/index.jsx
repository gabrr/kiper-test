import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import AddDweller from '../addDweller'
import './styles.css'

export const AddApt = props => {
    const { apInfo, saveInfo, removeChild } = props
    const handleInput = (e, type) => {
        
        type === 'number' && saveInfo({...apInfo, number: e.target.value})
        type === 'block' && saveInfo({...apInfo, block: e.target.value.toUpperCase()})
    }

    const addDwellerBt = () => {
        const aptComp = document.querySelector('#aptCard')
        removeChild(aptComp, AddDweller)
    }

    useEffect(() => {
    })

    return (
        <div id="aptCard" className="contentInCard">
            <h3 className="cardHeader">Adding an Apartment</h3>
            <label>Number<br/><input required value={apInfo.number} onChange={e => handleInput(e, 'number')} className="input" id="number" type="number" max={999} /></label>
            <label>Block<br/><input required value={apInfo.block} onChange={e => handleInput(e, 'block')} className="input" id="block" type="text" maxLength="1"/></label>
            <p className="btAction" onClick={() => addDwellerBt()} >+ Condo-dweller</p>
            <p className="btAction" onClick={() => addDwellerBt()} >+ People living with</p>
        </div>
    )
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(AddApt)
