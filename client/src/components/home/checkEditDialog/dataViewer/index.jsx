import React, { Component } from 'react'
import { connect } from 'react-redux'
import './styles.css'

export const DataViewer = ({viewData, editMode}) => {
    return (
        <div id="DataViewer">
            {editMode ? (
                <input type="text" name="fullname" maxLength="100" defaultValue={viewData.name} className="input editCardInput noMargin" placeholder="First and lastname"/>
            ) : <h3 className="cardHeader">{viewData.name}</h3>}
            
            <p className="leftSideLabel">Birthdate: 
                {editMode ? <input className="input editCardInput" type="date" size="4"/> : (
                    <span className="sideSpan"> {viewData.birthdate} </span>
                )}
            </p>
            <p className="leftSideLabel">CPF: 
                {editMode ? <input className="input editCardInput" defaultValue={viewData.cpf} type="text" pattern="\d{3}\.\d{3}\.\d{3}-\d{2}" title="type your CPF as: xxx.xxx.xxx-xx" placeholder="xxx.xxx.xxx-xx" size="15"/> : (
                    <span className="sideSpan"> {viewData.cpf} </span>
                )}
            </p>
            <p className="leftSideLabel">E-mail: 
                {editMode ? (
                    <input type="email" className="input editCardInput" defaultValue={viewData.email} placeholder="example@example.com" />
                ) : <span className="sideSpan"> {viewData.email} </span>}
            </p>
            <p className="leftSideLabel">Phone: 
                {editMode ? (
                    <input type="tel" className="input editCardInput" defaultValue={viewData.phone} placeholder="11 99999-9999" />
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
