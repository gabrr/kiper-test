import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import './styles.css'

export const CheckEditMenu = ({apt, editMode, setViewData}) => {

    return (
        <div id="checkEditMenu">
            <h3 className="menuLabel">Apartment 
                {editMode ? (
                    <input className="input editCardInput" size="5" type="text" placeholder="Digit number and block" defaultValue={apt.number + apt.block}/>
                ) : (
                    <span className="aptNumberBlock">{apt.number + apt.block}</span> 
                )}
            </h3>
            <h3 className="menuLabel">Condo-dweller</h3>
            <div  onClick={() => !editMode && setViewData(apt.owner)} className="btAction">{apt.owner.name}</div>
            <h3 className="menuLabel">People living with</h3>
            {apt.living[0] && apt.living.map((person, i) => (
                <div key={i} onClick={() => !editMode && setViewData(person)} className="btAction flex">{person.name}
                     {editMode && <div className="removeBt"  onClick={() => console.log(i)}><p className="removeIcon">x</p></div>}
                </div>
            ))}
        </div>
    )
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(CheckEditMenu)
