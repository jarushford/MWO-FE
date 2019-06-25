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
import Contact from '../Contact/Contact'
import ErrorPage from '../Error/Error'
import About from '../About/About'
import Media from '../Media/Media'
import Home from '../Home/Home'
import Footer from '../Footer/Footer'
import PressKit from '../PressKit/PressKit'

export default function App() {
  return (
    <div className="app">
      <Switch>
        <Route exact path="/" render={() => {
          document.title = 'Mad Wallace'
          return (
            <div>
              <MainNav />
              <Home />
              <Footer />
            </div>
          )
        }} />
        <Route exact path="/tour" render={() => {
          document.title = 'Mad Wallace | Tour'
          return (
            <div>
              <MainNav />
              <Tour />
              <Footer />
            </div>
          )
        }} />
        <Route exact path="/media" render={() => {
          document.title = 'Mad Wallace | Media'
          return (
            <div>
              <MainNav />
              <Media />
              <Footer />
            </div>
          )
        }} />
        <Route exact path="/about" render={() => {
          document.title = 'Mad Wallace | About'
          return (
            <div>
              <MainNav />
              <About />
              <Footer />
            </div>
          )
        }} />
        <Route exact path="/contact" render={() => {
          document.title = 'Mad Wallace | Contact'
          return (
            <div>
              <MainNav />
              <Contact />
              <Footer />
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
        <Route path="/presskit" component={PressKit} />
        <Route path="" component={ErrorPage} />
      </Switch>
    </div>
  )
}
