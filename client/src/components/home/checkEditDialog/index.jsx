import React, { useState, Fragment } from 'react'
import ReactDOM from 'react-dom'
import { connect } from 'react-redux'
import editImg from '../../../assets/edit.png'
import CheckEditMenu from './checkEditMenu'
import DataViewer from './dataViewer'
import { updateApartment } from '../../../gqlQueries/updateUpartment'
import { getAllApartments } from '../../../redux/actions'
import { useMutation } from '@apollo/react-hooks'
import './styles.css'

export const CheckEditEDialog = props => {
    const {_id: selected, apts, ongetAllApartment } = props

    const [updateApt, { data }] = useMutation(updateApartment)


    // we are going to work only with object clicked(an apartment data)
    const apt = apts.filter(({_id}) => _id === selected)[0]

    const [editMode, setEditMode] = useState(false)
    const [viewData, setViewData] = useState(apt.owner)
    const [aptData, setAptData] = useState(apt)
    const [realTimeData, setRealTimeData] = useState(apt)

    const closeCard = () => {
        document.getElementById('blur').style.filter = 'blur(0)'
        ReactDOM.unmountComponentAtNode(document.getElementById('noblur'))
    }

    const saveData = () => {
        setAptData(realTimeData)
        setEditMode(!editMode)

        updateApt({
            variables: {
                input: realTimeData
            }
        })
    }
    
    return (
        <div id="checkEdit" className="card">
            <h3 className="cardHeader">{!editMode ? 'Check Condo-dweller' : 'Edit Condo-dweller'}</h3>
            <img  className="editButtonIcon" onClick={() => setEditMode(!editMode)} src={editImg} alt="edit button" />
            <div className="flexContainer">
                <CheckEditMenu {...{aptData, setAptData, editMode,viewData, setViewData, setRealTimeData, realTimeData}}/>
                <DataViewer  {...{viewData, editMode, setViewData, setRealTimeData, realTimeData}}/>
            </div>
            <div className="cardRow">
                {editMode ? (
                    <Fragment>
                        <p onClick={() => {}} className="button2">Remove apartment</p>
                        <button onClick={() =>  saveData()} className="button saveEditBt">Save</button>
                    </Fragment>
                ) : (
                    <Fragment>
                        <p onClick={() => closeCard()} className="button2">Close</p>
                    </Fragment>
                )}
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    apts: state.apartments
})

const mapDispatchToProps = dispatch => ({
    ongetAllApartment: (args) => dispatch(getAllApartments)
})

export default connect(mapStateToProps, mapDispatchToProps)(CheckEditEDialog)
