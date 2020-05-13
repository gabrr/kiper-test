import React, { Component } from 'react';
import { Provider } from 'react-redux'
import store from './redux'
import AthenticateComponent from './auth/authenticate'
import { isUserLogged } from './auth/isUserLogged'
import LoginSignup from './components/loginSignup'
import Home from './components/home'
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
      <Provider store={store}>
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
      </Provider>
    )
  }
}