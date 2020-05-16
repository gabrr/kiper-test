import React from 'react'
import { connect } from 'react-redux'
import './styles.css'

export const AddApt = props => {
    const { apInfo, setApInfo, showAddDweller } = props

    const handleInput = (e, type) => {
        type === 'number' && setApInfo({...apInfo, number: e.target.value})
        type === 'block' && setApInfo({...apInfo, block: e.target.value.toUpperCase()})
    }

    return (
        <div id="aptCard" className="contentInCard">
            <h3 className="cardHeader">Adding an Apartment</h3>
            <label>Number<br/><input required name="number" value={apInfo.number} onChange={e => handleInput(e, 'number')} className="input" id="number" type="number" max={999} /></label>
            <label>Block<br/><input required name="block" value={apInfo.block} onChange={e => handleInput(e, 'block')} className="input" id="block" type="text" maxLength="1"/></label>
            <p className="btAction" onClick={() => showAddDweller('owner')} >+ Condo-dweller</p>
            <div className="dwellerlist">
                {apInfo.owner.name && <p style={{margin: '0 6px'}}>{apInfo.owner.name}<span style={{margin: '0 6px'}} className="btAction"> Edit</span></p>}
            </div>
            <p className="btAction" onClick={() => showAddDweller('living')} >+ People living with</p>
            <div className="dwellerlist">
                {apInfo.living && (
                    apInfo.living.map(({name}) => {
                        return <p style={{margin: '0 6px'}}>{name}</p>
                        // <span style={{margin: '0 6px'}} className="btAction"> Edit</span>
                    })
                )}
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(AddApt)
