import React, { Component } from 'react'
import Loader from '../Loader/Loader'
import ErrorPage from '../Error/Error'
import { connect } from 'react-redux'
import { setVideos, setPhotos } from '../../actions'

import '../../main.scss'

class Media extends Component {
  constructor() {
    super()
    this.state = {
      videos: [],
      photos: [],
      isLoading: false,
      error: ''
    }
  }

  componentDidMount() {
    if (!this.props.videos.length && !this.props.photos.length) {
      this.setState({ isLoading: true })
      this.getVideos() 
      this.getPhotos()
      this.setState({ isLoading: false }) 
    } else {
      this.setState({ videos: this.props.videos, photos: this.props.photos })
    }
  }

  getVideos = async () => {
    try {
      const url = 'https://mwo-be.herokuapp.com/api/v1/videos'
      const response = await fetch(url)

      if (!response.ok) {
        const message = response.status + ' ' + response.statusText
        this.setState({ error: message })
      } else {
        const videos = await response.json()
        this.props.setVideos(videos)
        this.setState({ videos })
      }
    } catch (error) {
      this.setState({ error })
    }
  }

  getPhotos = async () => {
    try {
      const url = 'https://mwo-be.herokuapp.com/api/v1/photos'
      const response = await fetch(url)

      if (!response.ok) {
        const message = response.status + ' ' + response.statusText
        this.setState({ error: message })
      } else {
        const photos = await response.json()
        this.props.setPhotos(photos)
        this.setState({ photos })
      }
    } catch (error) {
      this.setState({ error })
    }
  }

  render() {
    if (this.state.isLoading) {
      return <Loader />
    }

    if (this.state.error.length) {
      return <ErrorPage message={this.state.error} />
    }

    return (
      <section className="media-container">
        <h1>media</h1>
        
      </section>
    )
  }
}

const mapStateToProps = state => ({
  videos: state.videos,
  photos: state.photos
})

const mapDispatchToProps = dispatch => ({
  setVideos: videos => dispatch(setVideos(videos)),
  setPhotos: photos => dispatch(setPhotos(photos))
})

export default connect(mapStateToProps, mapDispatchToProps)(Media)