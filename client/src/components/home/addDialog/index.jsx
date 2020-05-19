import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import { connect } from 'react-redux'
import './styles.css'
import AddApt from './addApt'
import AddDweller from './addDweller'
import { useMutation } from '@apollo/react-hooks'
import { createApartment } from '../../../gqlQueries/createApartment'
import { getAllApartments } from '../../../redux/actions'

export const AddDialog = props => {
    const { ongetAllApartment } = props

    const [apInfo, setApInfo] = useState({
        number: String(),
        block: String(),
        owner: {
            name: String(),
            birthdate: Date(),
            phone: String(),
            cpf: String(),
            email: String(),
            class: String()
        },
        living: []
    })

    const [mutationAction, { data }] = useMutation(createApartment)


    // type of the data that will be added to the main state (onwer || living)
    const [dataType, setDataType] = useState('owner')

    const closeDialog = () => {
        document.getElementById('blur').style.filter = 'blur(0)'
        ReactDOM.unmountComponentAtNode(document.querySelector('#noblur'))
    }

    const sendNewApData = e => {
        e.preventDefault()
        
        mutationAction({
            variables: {
              input: apInfo,
            },
        })
        .catch(err => console.log(err))
    }


    const showAddDweller = (type) => {
        // type: owner || living
        const addDweller = document.querySelector('#dwellerCard')
        const addApt = document.querySelector('#aptCard')

        document.querySelector('#addCardSubmit').classList.add('outOfView')
        addApt.classList.add('outOfView')
        setTimeout(() => {
            addApt.classList.add('hidden')
            addDweller.classList.remove('hidden')
            addDweller.classList.remove('outOfView')
        }, 200)

        setDataType(type)
    }

    const showAddApt = () => {
        const addDweller = document.querySelector('#dwellerCard')
        const addApt = document.querySelector('#aptCard')

        document.querySelector('#addCardSubmit').classList.remove('outOfView')
        addDweller.classList.add('outOfView')
        setTimeout(() => {
            addDweller.classList.add('hidden')
            addApt.classList.remove('hidden')
            addApt.classList.remove('outOfView')
        }, 200)
    }

    return (
        <div className="addCard card">
            <form onSubmit={(e) => sendNewApData(e)}>
                <div id="addAptNode">
                    <AddApt {...{apInfo, setApInfo, showAddDweller}} />
                    <AddDweller {...{apInfo, setApInfo, dataType, setDataType, showAddApt}} />
                </div>
                <div id="addDwellerNode">
                </div>
                <div id="addCardSubmit" className="cardRow">
                    <p onClick={() => closeDialog()} className="button2">Cancel</p>
                    <button type="submit" className="button">Create apartment</button>
                </div>
            </form>
        </div>
    )
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = dispatch => ({
    ongetAllApartment: (args) => dispatch(getAllApartments(args))  
})

export default connect(mapStateToProps, mapDispatchToProps)(AddDialog)
