import React from 'react'
import { connect } from 'react-redux'
import { getAllApartments } from '../../redux/actions'
import SearchBar from './searchBar'
import './styles.css'

const Home = props => {

    const welcomeUser = () => {
        const { name } = props.state.user
        const userFirstName = name.split(' ')[0]

        const date = new Date().getHours()
        const phrases = {
            morning: 'Good morning',
            afternoon: 'Good afternoon',
            night: 'Good evening'
        }

        switch(date) {
            case date > 0 && date < 12:
                return `${phrases.morning}, ${userFirstName}`
            case date > 12 && date < 18:
                return `${phrases.afternoon}, ${userFirstName}`
            default:
                return `${phrases.night}, ${userFirstName}`
        }
    }




    return (
        <div id="home">
            <nav>
                <h1 className='welcomingPhrase'>{welcomeUser()}</h1>
                <SearchBar/>
            </nav>
        </div>
    ) 
}

const mapStateToProps = state => ({
    state
})

const mapDispatchToProps = dispatch => ({
    getApartments: (params) => dispatch(getAllApartments(params))
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)