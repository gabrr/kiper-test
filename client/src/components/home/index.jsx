import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import { getAllApartments } from '../../redux/actions'

const Home = props => {
    console.log(props.state, 'home')
    return (
        <Fragment>
            <h1>home page</h1>
        </Fragment>
    ) 
}

const mapStateToProps = state => ({
    state
})

const mapDispatchToProps = dispatch => ({
    getApartments: (params) => dispatch(getAllApartments(params))
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)