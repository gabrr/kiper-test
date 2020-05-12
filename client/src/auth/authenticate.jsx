import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

const AthenticateComponent = props => {
    const { auth } = props
    return auth ? props.children : <Redirect to={{ pathname: "/" }}/>
}
const mapStateToProps = state => ({
    auth: state.user.auth
})

export default connect(mapStateToProps)(AthenticateComponent)