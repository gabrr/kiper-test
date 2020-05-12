import React, { Fragment, useState } from 'react'
import { connect } from 'react-redux'
import { signin } from '../../../redux/actions'
import { store } from '../../../redux'
import './styles.css'

const Card = props => {
    const [login, setLogin] = useState(true)
    const authenticate = e => {
        e.preventDefault()

        return login ? store.dispatch(props.signin({email:'g.webdevelop@gmail.com', pass:'123abcde'})) :  null
    }



    const checkPassword = e => {
        const pass = e.target.value
        const label = document.querySelector('#passlabel')
        if (pass.length < 6) label.innerHTML = '<span style="color: rgba(255, 104, 89, 0.91)">Choose a bigger password</span>'
        if (pass.match(/[^0-9]/gi)) label.innerHTML = '<span style="color: rgba(255, 104, 89, 0.91)">Choose a few numbers</span>'
        if (pass.length > 6 && pass.match(/[0-9]/gi)) label.innerHTML = '<span style="color:rgba(86, 253, 86, 0.73)">Good job :)</span>'

        // if is to login show the original label
        if (login) label.innerHTML = 'Password'
        console.log(props.state)
    }

    const checkName = e => {
        const name = e.target.value
        const label = document.querySelector('#namelabel')
        const names = name.split(' ')

        const hasTwoNames = names => {
            let state = false;
            if (names.length < 2) {
                state = false
            } else {
                for (let name of names) {
                    name.length < 2 ? state=false : state=true
                }
            }
            return state
        }

        if (!hasTwoNames(names)) label.innerHTML = '<span style="color: rgba(255, 104, 89, 0.91)">Don\'t forget your lastname</span>'
        if (hasTwoNames(names)) label.innerHTML = '<span style="color:rgba(86, 253, 86, 0.73)">Good job :)</span>'
    }

    return (
        <div className="card signCard">
            <form onSubmit={(x) => authenticate(x)}>
                <h2 className="title2">{login ? 'Sign in' : 'Sign up'}</h2>
                {login ? null : (<Fragment>
                    <label id='namelabel' htmlFor="name">Fullname</label>
                <input className="input" required type="text" maxLength="30" onChange={e => checkName(e)} name="name" id="name"/>
                </Fragment>)}
                <label htmlFor="email">E-mail</label>
                <input className="input" required type="email" name="email" id="email"/>
                <label id="passlabel" htmlFor="password">Password</label>
                <input className="input" maxLength="18" required onChange={(e) => checkPassword(e)} type="password" name="password" id="password"/>
                <button id="sign-bt" className="button" disabled={false} type="submit">{login ? 'Sign in' : 'Sign up'}</button>
                {login ? <p>Create an account, just <span onClick={() => setLogin(!login)} className="link2"> click here</span>.</p> : (
                    <p>Already have an account, <span onClick={() => setLogin(!login)} className="link2">click here</span>.</p>
                )}
            </form>
        </div>
    )
}

const mapStateToProps = state => ({
    state
})

const mapDispatchToProps = dispatch => ({
    signin: (args) => dispatch(signin(args))
})

export default connect(mapStateToProps, mapDispatchToProps)(Card)