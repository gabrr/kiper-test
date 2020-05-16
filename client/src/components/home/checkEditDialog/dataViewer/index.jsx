import React, { Component } from 'react'
import { connect } from 'react-redux'
import './styles.css'

export const DataViewer = ({viewData, setViewData, editMode, setRealTimeData, realTimeData}) => {

    const handleInputs = ({target}, field) => {
        const { value } = target
        if (viewData.type === 'owner') {
            setRealTimeData({
                ...realTimeData,
                owner: {
                    ...realTimeData.owner,
                    [field]: value
                }
            })
            setViewData({...realTimeData.owner, [field]: value})
        } 

        // the item to be updated will be removed first and then added the lastest version of it.
        const { id } = viewData
        const lessItemToBeUpdated = realTimeData.living && realTimeData.living.filter((person) => person.id !== id)
        const newPerson = {...viewData, [field]: value}

        if (viewData.type === 'living') {
            setRealTimeData({
                ...realTimeData,
                living: [
                    ...lessItemToBeUpdated,
                    newPerson
                ]
            })
            setViewData(newPerson)
        } 
    }

    return (
        <div id="DataViewer">
            {editMode ? (
                <input onChange={(e) => handleInputs(e, 'name')} type="text" name="fullname" maxLength="200" placeholder={viewData.name} className="input editCardInput noMargin"/>
            ) : <h3 className="cardHeader">{viewData.name}</h3>}
            
            <p className="leftSideLabel">Birthdate: 
                {editMode ? <input onChange={(e) => handleInputs(e, 'birthdate')} className="input editCardInput" type="date" size="4"/> : (
                    <span className="sideSpan"> {viewData.birthdate} </span>
                )}
            </p>
            <p className="leftSideLabel">CPF: 
                {editMode ? <input onChange={(e) => handleInputs(e, 'cpf')} className="input editCardInput" type="text" pattern="\d{3}\.\d{3}\.\d{3}-\d{2}" title="type your CPF as: xxx.xxx.xxx-xx" placeholder={viewData.cpf} size="15"/> : (
                    <span className="sideSpan"> {viewData.cpf} </span>
                )}
            </p>
            <p className="leftSideLabel">E-mail: 
                {editMode ? (
                    <input onChange={(e) => handleInputs(e, 'email')} type="email" className="input editCardInput" placeholder={viewData.email} />
                ) : <span className="sideSpan"> {viewData.email} </span>}
            </p>
            <p className="leftSideLabel">Phone: 
                {editMode ? (
                    <input onChange={(e) => handleInputs(e, 'phone')} type="tel" className="input editCardInput"  placeholder={viewData.phone} />
                ) : <span className="sideSpan"> {viewData.phone} </span>}
            </p>
        </div>
    )
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(DataViewer)
