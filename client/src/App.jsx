import React, { Component } from 'react';
import { Provider as ReduxProvider} from 'react-redux'
import store from './redux'
import AthenticateComponent from './auth/authenticate'
import { isUserLogged } from './auth/isUserLogged'
import LoginSignup from './components/loginSignup'
import Home from './components/home'
import { client } from './apolloClient'

import { ApolloProvider } from '@apollo/react-hooks'


import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";



export default class App extends Component {
  componentDidMount() {
    isUserLogged()
    window.addEventListener('keydown', x => {
      let hour = new Date().getHours()
      x.key === 'R' && console.log(store.getState(), 'hour', hour)
    })

  }

  render() {
    return (
      <ApolloProvider client={client}>
        <ReduxProvider store={store}>
          <Router>
            <div id="blur">
              <Switch>
                  <Route exact path='/'>
                    <LoginSignup/>
                  </Route>
                  <Route path='/home'>
                    <AthenticateComponent>
                        <Home/>
                    </AthenticateComponent>
                  </Route>
              </Switch>
            </div>
            <div id="noblur"></div>
          </Router>
        </ReduxProvider>
      </ApolloProvider>
    )
  }
}