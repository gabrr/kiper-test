import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import walkingImg from '../../assets/walking.png'
import store from '../../redux'
import * as myStorage from '../../utils/localStorage'
import curve1 from '../../assets/curve1.png'
import curve2 from '../../assets/curve2.png'
import Card from "./card/"
import './styles.css'

const LoginSignup = props => {

    const isRegistered = () => {
        if (myStorage.hasStorage('user')) {
            // myStorage.getStorage('user')
            const user = {
                auth: true,
                name: "Gabriel",
                email: "g.webdevelop@gmail.com",
                token: "ndea7xyt7r5768q7t7a%ˆ&*rhjg"
            }
            store.dispatch({type: 'SIGNIN_SUCCESS', user})
            myStorage.setStorage('user', user)
        } 
    }


    useEffect(() => {
        isRegistered()
    }, [])

    return !props.user.auth ? (
        <div id="signCont" className="container hidden-overflowY">
            <img id="curve1" src={curve1} alt="a curve"/>
            <img id="curve2" src={curve2} alt="a second curve"/>
            <div id="loginSignup">
                <h1 id="title">Gabrr Condo</h1>
                <img id="walkingPerson" src={walkingImg} alt="a walking person"/>
                <Card/>
            </div>
        </div>
    ) : <Redirect to={{ pathname: "/home" }}/>
}

const mapStateToProps = state => {
    const { user } = state
    return {
        user
    }
}

export default connect(mapStateToProps)(LoginSignup)