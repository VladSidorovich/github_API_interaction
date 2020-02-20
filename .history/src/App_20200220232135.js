import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import {Navbar} from './components/Navbar'
import {About} from './pages/About'
import {Profile} from './pages/Profile'
import {Home} from './pages/Home'
import {Alert} from './components/Alert'
import { AlertState } from './context/alert/alertState'
import { GithubState } from './context/github/GithubState'

function App() {
  return (
    <GithubState>
      <AlertState>
        <BrowserRouter>
          <Navbar/>
          <div className="container pt-4">
            <Alert alert={{text: 'Test Alert'}}/>
            <Switch>
              <Route path="/" exact component={Home}/>
              <Route path="/about" component={About}/>
              <Route path="/profile/:name" component={Profile}/>
            </Switch>
          </div>
        </BrowserRouter>
      </AlertState>
    </GithubState>
  )
}

export default App;