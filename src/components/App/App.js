import React from 'react'
import { Route, Switch } from 'react-router-dom'
import AdminLogin from '../AdminLogin/AdminLogin'
import AdminHome from '../AdminHome/AdminHome'
import AdminTour from '../AdminTour/AdminTour'
import AdminPhotos from '../AdminPhotos/AdminPhotos'
import AdminNews from '../AdminNews/AdminNews'

export default function App() {
  return (
    <div className="app">
      <Switch>
        <Route exact path="/" />
        <Route exact path="/admin" component={AdminLogin} />
        <Route path="/admin/tour" render={() => {
          return (
            <div>
              <AdminHome />
              <AdminTour />
            </div>
          )
        }} />
        <Route path="/admin/photos" render={() => {
          return (
            <div>
              <AdminHome />
              <AdminPhotos />
            </div>
          )
        }} />
        <Route path="/admin/news" render={() => {
          return (
            <div>
              <AdminHome />
              <AdminNews />
            </div>
          )
        }} />
      </Switch>
    </div>
  )
}
