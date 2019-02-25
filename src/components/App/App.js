import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { AdminLogin } from '../AdminLogin/AdminLogin'

export default function App() {
  return (
    <div className="app">
      <Switch>
        <Route exact path="/" />
        <Route exact path="/admin" component={AdminLogin} />
        <Route />
      </Switch>
    </div>
  )
}
