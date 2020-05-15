import React, { useState } from 'react'
import { connect } from 'react-redux'
import './styles.css'

export const AddDweller = props => {
    const { showAddApt, setApInfo, apInfo, dataType } = props

    const [userData, setUserData] = useState({
            name: String(),
            birthdate: Date(),
            phone: String(),
            cpf: String(),
            email: String()
    })
    
    const updateApData = () => {
        if (dataType === 'owner') {
            setApInfo({
                ...apInfo,
                owner: userData
            })
        }

        if (dataType === 'living') {
            console.log('arrived here')
            setApInfo({
                ...apInfo,
                living: [
                    ...apInfo.living,
                    userData
                ]
            })
        }
        showAddApt(true)
    }

    return (
        <div id="dwellerCard" className="contentInCard outOfView hidden">
            <h3 className="cardHeader">Adding a Condo-dweller</h3>
            <p onClick={() => showAddApt(true)} className="btAction">{'< Back'}</p>
            <label>Name<br/><input onChange={(e) => setUserData({...userData, name: e.target.value})}  name="name" className="input" type="text" placeholder="First and lastname" /></label>
            <label>E-mail<br/><input onChange={(e) => setUserData({...userData, email: e.target.value})}  name="email" className="input" type="email"  placeholder="example@example.com"/></label>
            <label>Phone<br/><input onChange={(e) => setUserData({...userData, phone: e.target.value})}  name="phone" className="input" type="tel"  pattern="[0-9]{11}" placeholder="xxxxxxxxxxx"/></label>
            <label>CPF<br/><input onChange={(e) => setUserData({...userData, cpf: e.target.value})}  name="cpf" className="input" type="text" pattern="\d{3}\.\d{3}\.\d{3}-\d{2}"
			title="type your CPF as: xxx.xxx.xxx-xx" placeholder="xxx.xxx.xxx-xx"/></label>
            <label>Birthdate<br/><input onChange={(e) => setUserData({...userData, birthdate: e.target.value})}  name="birthdate" className="input" type="date"/></label>
            <div id="addUserDataBt" onClick={updateApData} className="button">Save</div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(AddDweller)
