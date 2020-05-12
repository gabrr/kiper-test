import React, { Component } from 'react';
import { Provider } from 'react-redux'
import store from './redux'
import AthenticateComponent from './auth/authenticate'
import LoginSignup from './components/loginSignup'
import Home from './components/home'
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";



export default class App extends Component {
  componentDidMount() {

    window.addEventListener('keydown', x => {
      x.key === 'R' && console.log(store.getState())
    })
  }

  render() {
    return (
      <Provider store={store}>
        <Router>
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
        </Router>
      </Provider>
    )
  }
}