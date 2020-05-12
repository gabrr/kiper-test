import React from 'react';
import { store } from './redux'
import { Provider } from 'react-redux'
import AthenticateComponent from './auth/authenticate'
import LoginSignup from './components/loginSignup'
import Home from './components/home'
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

export default function funcitonApp() {
  console.log(store.getState(), 'app')
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