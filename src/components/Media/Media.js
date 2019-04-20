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
      currentImage: 0,
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

  nextPhoto = (dir) => {
    const { currentImage, photos } = this.state
    if (dir === 1 && currentImage === photos.length - 1) {
      this.setState({ currentImage: 0 })
    } else if (dir === -1 && currentImage === 0) {
      this.setState({ currentImage: photos.length - 1 })
    } else {
      this.setState({ currentImage: currentImage + dir })
    }
  }

  render() {
    const { photos, videos, currentImage, isLoading, error } = this.state

    if (isLoading) {
      return <Loader />
    }

    if (error.length) {
      return <ErrorPage message={error} />
    }

    // let videoRender
    // if (!this.state.videos.length) {
    //   videoRender = <h3>videos are loading</h3>
    // } else {
    //   videoRender = (
    //     <div>
    //         {
    //           this.state.videos.map(video => {
    //             return (
    //               <div className="vid-container">
    //                 <iframe id="vid_frame" src={video.link} frameBorder="0" width="100%" height="100%"></iframe>
    //               </div>
    //             )
    //           })
    //         }
    //     </div>
    //   )
    // }

    let photosRender
    if (!photos.length) {
      photosRender = <h3>photos are loading</h3>
    } else {
      photosRender = (
        <img
          src={photos[currentImage].link}
          alt={photos[currentImage].description}
        />
      )
    }

    return (
      <section className="media-container">
        <h1>media</h1>
        <section className="music-container">
          <h2>music</h2>
          <div>
            <iframe id="spotifyPlayer" src="https://open.spotify.com/embed/user/1243259682/playlist/1dvSwaN3D8PGP8zWNGz2UC" title="spotify player" width="300px" height="300px" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
            <a href="https://madwallace.bandcamp.com/album/hook-line-sinker" target="_blank" rel="noopener noreferrer" >
              <img id="hookline" src="./assets/hookline-album-art.jpg" alt="Hook Line and Sinker" />
            </a>
			      <a href="https://madwallace.bandcamp.com/album/2804" target="_blank" rel="noopener noreferrer">
              <img id="twenty804" src="./assets/2804-album-art.jpg" alt="2804" />
            </a>
          </div>
          <button>follow on spotify <i className="fab fa-spotify"></i></button>
        </section>
        <section className="videos-container">
          <h2>videos</h2>
          {/* {videoRender} */}
        </section>
        <section className="photos-container">
          <h2>photos</h2>
          <div>
            <i className="fas fa-caret-left" onClick={() => this.nextPhoto(-1)}></i>
            {photosRender}
            <i className="fas fa-caret-right" onClick={() => this.nextPhoto(1)}></i>
          </div>
        </section>
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