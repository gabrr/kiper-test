import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import { Provider, connect } from 'react-redux'
import store from '../../../redux'
import './styles.css'
import AddApt from './addApt'
import AddDweller from './addDweller'

export const AddDialog = () => {
    const [apInfo, setApInfo] = useState({
        id: String(),
        number: Number(),
        block: String(),
        owner: {
            id: String(),
            name: String(),
            birthdate: Date(),
            phone: String(),
            cpf: String(),
            email: String()
        },
        living: [
            {
                id: String(),
                name: String(),
                birthdate: Date(),
                phone: String(),
                cpf: String(),
                email: String()
            }
        ]
    })

    const closeDialog = () => {
        document.getElementById('blur').style.filter = 'blur(0)'
        ReactDOM.unmountComponentAtNode(document.querySelector('#noblur'))
    }

    const sendNewApData = e => {
        e.preventDefault()
        console.log(apInfo, 'apt. info sent')
    }

    const removeChild = (comp, NewComp) => {
        comp.classList.add('goAway')
        setTimeout(() => {
            ReactDOM.render(
                <Provider store={store}>
                    {<NewComp/>}
                </Provider>, document.getElementById('addAptNode')
            )
        }, 200)
    }
    

    return (
        <div className="addCard card">
            <form onSubmit={(e) => sendNewApData(e)}>
                <div id="addAptNode">
                    {/* <AddApt {...{apInfo, setApInfo, removeChild}} /> */}
                    <AddDweller/>
                </div>
                <div className="cardRow">
                    <p onClick={() => closeDialog()} className="button2">Cancel</p>
                    <button type="submit" className="button">Save</button>
                </div>
            </form>
        </div>
    )
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(AddDialog)
