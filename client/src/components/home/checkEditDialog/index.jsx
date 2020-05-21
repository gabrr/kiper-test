import React, { useState, Fragment } from 'react'
import ReactDOM from 'react-dom'
import { connect } from 'react-redux'
import editImg from '../../../assets/edit.png'
import CheckEditMenu from './checkEditMenu'
import DataViewer from './dataViewer'
import { updateApartment } from '../../../gqlQueries/updateUpartment'
import { deleteApartment } from '../../../gqlQueries/deleteApartment'
import { getAllApartments, updateApartments, deleteApartments } from '../../../redux/actions'
import { useMutation } from '@apollo/react-hooks'
import './styles.css'

export const CheckEditEDialog = props => {
    const {_id: selected, apts, onUpdateApartment, onDeleteApartment } = props

    const [updateApt] = useMutation(updateApartment)
    const [deleteApt] = useMutation(deleteApartment)


    // we are going to work only with object clicked(an apartment data)
    const apt = apts.filter(({_id}) => _id === selected)[0]

    const [editMode, setEditMode] = useState(false)
    const [viewData, setViewData] = useState(apt.owner)
    const [aptData, setAptData] = useState(apt)
    const [realTimeData, setRealTimeData] = useState(apt)
    const [livingToDelete, setlivingToDelete] = useState([])

    const closeCard = () => {
        document.getElementById('blur').style.filter = 'blur(0)'
        ReactDOM.unmountComponentAtNode(document.getElementById('noblur'))
    }

    const saveData = async() => {
        updateApt({
            variables: {
                input: {
                    ...realTimeData,
                    living: remainedLiving()
                }
            }
        }).then(res => {
            onUpdateApartment(selected, res.data.updateApt)
            setEditMode(!editMode)
            setlivingToDelete([])
            setAptData(res.data.updateApt)
            setRealTimeData(res.data.updateApt)
        })
    }

    // deleting people who live with if any highlighted
    const remainedLiving = () => {
        const remainedItems = realTimeData.living && realTimeData.living.map((item) => {
            const wontDelete = livingToDelete.map(id => id === item._id ? false : item) 
            return wontDelete.indexOf(false) === -1 && item
        })
        .filter(items => items !== false)
        return remainedItems
    }

    const deletingApartment = () => {
        closeCard()
        deleteApt({
            variables: {
                _id: selected
            }
        }).then(() => onDeleteApartment(selected))
    }

    const childrenProps = {aptData, setAptData, editMode, viewData, setViewData, setRealTimeData, realTimeData, setlivingToDelete, livingToDelete}
    return (
        <div id="checkEdit" className="card">
            <h3 className="cardHeader">{!editMode ? 'Check Condo-dweller' : 'Edit Condo-dweller'}</h3>
            <img  className="editButtonIcon" onClick={() => setEditMode(!editMode)} src={editImg} alt="edit button" />
            <div className="flexContainer">
                <CheckEditMenu {...childrenProps}/>
                <DataViewer  {...childrenProps}/>
            </div>
            <div className="cardRow">
                {editMode ? (
                    <Fragment>
                        <p onClick={() => deletingApartment()} className="button2">Remove apartment</p>
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
    ongetAllApartment: (args) => dispatch(getAllApartments),
    onUpdateApartment: (aptId, newApt) => dispatch(updateApartments(aptId, newApt)),
    onDeleteApartment: (aptId) => dispatch(deleteApartments(aptId))
})

export default connect(mapStateToProps, mapDispatchToProps)(CheckEditEDialog)
