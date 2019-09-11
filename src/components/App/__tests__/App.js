import React from 'react'
import App from '../App'
import { shallow, mount } from 'enzyme'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { MemoryRouter } from 'react-router-dom'
import MainNav from '../../MainNav/MainNav'
import Footer from '../../Footer/Footer'
import { Home } from '../../Home/Home'
import { Tour } from '../../Tour/Tour'
import { Media } from '../../Media/Media'
import About from '../../About/About'
import Contact from '../../Contact/Contact'
import PressKit from '../../PressKit/PressKit'
import { AdminHome } from '../../Admin/AdminHome/AdminHome'
import { AdminLogin } from '../../Admin/AdminLogin/AdminLogin'
import { AdminTour } from '../../Admin/AdminTour/AdminTour'
import { AdminPhotos } from '../../Admin/AdminPhotos/AdminPhotos'
import { AdminNews } from '../../Admin/AdminNews/AdminNews'
import { AdminVideos } from '../../Admin/AdminVideos/AdminVideos'
import { AdminMailing } from '../../Admin/AdminMailing/AdminMailing'

describe('App', () => {
  it('should match the snapshot', () => {
    const wrapper = shallow(<App />)
    expect(wrapper).toMatchSnapshot()
  })

  it('should render correct components if on Tour route', () => {
    const wrapper = mount(
      <Provider store={createStore(() => ({
        tourDates: [],
        photos: [],
        videos: [],
        news: []
      }))}>
        <MemoryRouter initialEntries={['/tour']}>
          <App />
        </MemoryRouter>
      </Provider>
    )
    expect(wrapper.find(Tour)).toHaveLength(1)
    expect(wrapper.find(MainNav)).toHaveLength(1)
    expect(wrapper.find(Footer)).toHaveLength(1)
  })

  it('should render correct components if on Media route', () => {
    const wrapper = mount(
      <Provider store={createStore(() => ({
        tourDates: [],
        photos: [],
        videos: [],
        news: []
      }))}>
        <MemoryRouter initialEntries={['/media']}>
          <App />
        </MemoryRouter>
      </Provider>
    )
    expect(wrapper.find(Media)).toHaveLength(1)
    expect(wrapper.find(MainNav)).toHaveLength(1)
    expect(wrapper.find(Footer)).toHaveLength(1)
  })

  it('should render correct components if on About route', () => {
    const wrapper = mount(
      <Provider store={createStore(() => ({
        tourDates: [],
        photos: [],
        videos: [],
        news: []
      }))}>
        <MemoryRouter initialEntries={['/about']}>
          <App />
        </MemoryRouter>
      </Provider>
    )
    expect(wrapper.find(About)).toHaveLength(1)
    expect(wrapper.find(MainNav)).toHaveLength(1)
    expect(wrapper.find(Footer)).toHaveLength(1)
  })

  it('should render correct components if on Contact route', () => {
    const wrapper = mount(
      <Provider store={createStore(() => ({
        tourDates: [],
        photos: [],
        videos: [],
        news: []
      }))}>
        <MemoryRouter initialEntries={['/contact']}>
          <App />
        </MemoryRouter>
      </Provider>
    )
    expect(wrapper.find(Contact)).toHaveLength(1)
    expect(wrapper.find(MainNav)).toHaveLength(1)
    expect(wrapper.find(Footer)).toHaveLength(1)
  })

  it('should render correct components if on PressKit route', () => {
    const wrapper = mount(
      <Provider store={createStore(() => ({
        tourDates: [],
        photos: [],
        videos: [],
        news: []
      }))}>
        <MemoryRouter initialEntries={['/presskit']}>
          <App />
        </MemoryRouter>
      </Provider>
    )
    expect(wrapper.find(PressKit)).toHaveLength(1)
    expect(wrapper.find(Footer)).toHaveLength(1)
  })

  it('should render correct components if on root route', () => {
    const wrapper = mount(
      <Provider store={createStore(() => ({
        tourDates: [],
        photos: [],
        videos: [],
        news: []
      }))}>
        <MemoryRouter initialEntries={['/']}>
          <App />
        </MemoryRouter>
      </Provider>
    )
    expect(wrapper.find(Home)).toHaveLength(1)
    expect(wrapper.find(MainNav)).toHaveLength(1)
    expect(wrapper.find(Footer)).toHaveLength(1)
  })

  it('should render correct components if on Admin root route', () => {
    const wrapper = mount(
      <Provider store={createStore(() => ({
        tourDates: [],
        photos: [],
        videos: [],
        news: []
      }))}>
        <MemoryRouter initialEntries={['/admin']}>
          <App />
        </MemoryRouter>
      </Provider>
    )
    expect(wrapper.find(AdminLogin)).toHaveLength(1)
  })

  it('should render correct components if on Admin Tour route', () => {
    const wrapper = mount(
      <Provider store={createStore(() => ({
        tourDates: [],
        photos: [],
        videos: [],
        news: [],
        user: true
      }))}>
        <MemoryRouter initialEntries={['/admin/tour']}>
          <App />
        </MemoryRouter>
      </Provider>
    )
    expect(wrapper.find(AdminHome)).toHaveLength(1)
    expect(wrapper.find(AdminTour)).toHaveLength(1)
  })

  it('should render correct components if on Admin Tour route', () => {
    const wrapper = mount(
      <Provider store={createStore(() => ({
        tourDates: [],
        photos: [],
        videos: [],
        news: [],
        user: true
      }))}>
        <MemoryRouter initialEntries={['/admin/tour']}>
          <App />
        </MemoryRouter>
      </Provider>
    )
    expect(wrapper.find(AdminHome)).toHaveLength(1)
    expect(wrapper.find(AdminTour)).toHaveLength(1)
  })

  it('should render correct components if on Admin Photos route', () => {
    const wrapper = mount(
      <Provider store={createStore(() => ({
        tourDates: [],
        photos: [],
        videos: [],
        news: [],
        user: true
      }))}>
        <MemoryRouter initialEntries={['/admin/photos']}>
          <App />
        </MemoryRouter>
      </Provider>
    )
    expect(wrapper.find(AdminHome)).toHaveLength(1)
    expect(wrapper.find(AdminPhotos)).toHaveLength(1)
  })

  it('should render correct components if on Admin Videos route', () => {
    const wrapper = mount(
      <Provider store={createStore(() => ({
        tourDates: [],
        photos: [],
        videos: [],
        news: [],
        user: true
      }))}>
        <MemoryRouter initialEntries={['/admin/videos']}>
          <App />
        </MemoryRouter>
      </Provider>
    )
    expect(wrapper.find(AdminHome)).toHaveLength(1)
    expect(wrapper.find(AdminVideos)).toHaveLength(1)
  })

  it('should render correct components if on Admin News route', () => {
    const wrapper = mount(
      <Provider store={createStore(() => ({
        tourDates: [],
        photos: [],
        videos: [],
        news: [],
        user: true
      }))}>
        <MemoryRouter initialEntries={['/admin/news']}>
          <App />
        </MemoryRouter>
      </Provider>
    )
    expect(wrapper.find(AdminHome)).toHaveLength(1)
    expect(wrapper.find(AdminNews)).toHaveLength(1)
  })

  it('should render correct components if on Admin Mailing route', () => {
    const wrapper = mount(
      <Provider store={createStore(() => ({
        tourDates: [],
        photos: [],
        videos: [],
        news: [],
        user: true
      }))}>
        <MemoryRouter initialEntries={['/admin/mailing']}>
          <App />
        </MemoryRouter>
      </Provider>
    )
    expect(wrapper.find(AdminHome)).toHaveLength(1)
    expect(wrapper.find(AdminMailing)).toHaveLength(1)
  })
})