import React from 'react'
import { Route, Switch } from 'react-router-dom'
import AdminLogin from '../Admin/AdminLogin/AdminLogin'
import AdminHome from '../Admin/AdminHome/AdminHome'
import AdminTour from '../Admin/AdminTour/AdminTour'
import AdminPhotos from '../Admin/AdminPhotos/AdminPhotos'
import AdminNews from '../Admin/AdminNews/AdminNews'
import AdminVideos from '../Admin/AdminVideos/AdminVideos'
import AdminMailing from '../Admin/AdminMailing/AdminMailing'
import MainNav from '../MainNav/MainNav'
import Tour from '../Tour/Tour'

export default function App() {
  return (
    <div className="app">
      <Switch>
        <Route exact path="/" render={() => {
          return (
            <div>
              <MainNav />
            </div>
          )
        }} />
        <Route exact path="/tour" render={() => {
          return (
            <div>
              <MainNav />
              <Tour />
            </div>
          )
        }} />
        <Route exact path="/media" render={() => {
          return (
            <div>
              <MainNav />
            </div>
          )
        }} />
        <Route exact path="/about" render={() => {
          return (
            <div>
              <MainNav />
            </div>
          )
        }} />
        <Route exact path="/contact" render={() => {
          return (
            <div>
              <MainNav />
            </div>
          )
        }} />
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
        <Route path="/admin/videos" render={() => {
          return (
            <div>
              <AdminHome />
              <AdminVideos />
            </div>
          )
        }} />
        <Route path="/admin/mailing" render={() => {
          return (
            <div>
              <AdminHome />
              <AdminMailing />
            </div>
          )
        }} />
      </Switch>
    </div>
  )
}
