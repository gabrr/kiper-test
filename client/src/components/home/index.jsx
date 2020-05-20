import React, { useEffect, useCallback, useState } from 'react'
import store from '../../redux'
import ReactDOM from 'react-dom'
import { connect, Provider } from 'react-redux'
import { ApolloProvider } from '@apollo/react-hooks'
import { client } from '../../apolloClient'
import { getAllApartments } from '../../redux/actions'
import SearchBar from './searchBar'
import MainCard from './mainCard'
import AddDialog from './addDialog'
import './styles.css'
import {useQuery} from '@apollo/react-hooks'
import gql from 'graphql-tag'

const apartmentsQuery = gql ` 
{
  apartments {
          _id,
          number,
          block,
          owner {
              name,
              email,
              phone,
              cpf,
              birthdate,
              class
          },
          living{
              _id,
              name,
              email,
              phone,
              cpf,
              birthdate,
              class
          }
      }
}
  
  `

const Home = props => {
    const { ongetApartments, apartments } = props
    const [apts, setApts] = useState(apartments)
    const {loading, error, data} = useQuery(apartmentsQuery)
    if (!loading && !error) console.log(data)

    const welcomeUser =  useCallback(() => {
        const { name } = props.state.user
        const userFirstName = name.split(' ')[0]
        const input = document.querySelector('.welcomingPhrase')
        const date = new Date().getHours()
        const phrases = {
            morning: 'Good morning',
            afternoon: 'Good afternoon',
            night: 'Good evening'
        }
        const getThePhrase = hours => {
            if (hours > 0 && hours < 12) return `${phrases.morning}, ${userFirstName}`
            if (hours > 12 && hours < 18) return `${phrases.afternoon}, ${userFirstName}`
            if (hours > 18 && hours < 23) return `${phrases.night}, ${userFirstName}`
            return `Welcome back, ${userFirstName}`
        }

        input.innerHTML = getThePhrase(date)
        },
        [props.state.user],
    ) 

    const addADweller = () => {
        document.getElementById('blur').style.filter = 'blur(10px)'
        ReactDOM.render(
            <ApolloProvider client={client}>
                <Provider store={store}>
                    <AddDialog/>
                </Provider>
            </ApolloProvider>, document.getElementById('noblur'))
            
    }

    useEffect(() => {
        welcomeUser()
        ongetApartments()
    }, [welcomeUser, ongetApartments])

    useEffect(() => {
        setApts(apartments)
    }, [apartments])


    return (
        <div id="home">
            <nav>
                <h1 className='welcomingPhrase'> </h1>
                <SearchBar {...{setApts, apts}} />
            </nav>
            <div id="toolingRow">
                <p className="btAction" onClick={() => addADweller()} >+ Add a dweller</p>
                <p className="btAction">Filter by name</p>
            </div>
            <MainCard {...{addADweller, apts}}/>
            <div id="blurContainer"></div>
        </div>
    ) 
}

const mapStateToProps = state => ({
    apartments: state.apartments,
    state
})

const mapDispatchToProps = dispatch => ({
    ongetApartments: (params) => dispatch(getAllApartments(params)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)