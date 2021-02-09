import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './components/screen/home'
import Person from './components/screen/person'
import Navbar from './components/layout/navbar'

import { Provider } from './context/UserState'

import './App.css'

const App = () => {
  return (
    <Provider>
      <Router>
      
        <div className='navbar'>
          <Navbar />
        </div>

        <div className='container'>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/user' component={Person} />
          </Switch>
        </div>

      </Router>
    </Provider>
  )
}

export default App
