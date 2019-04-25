import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setTourDates, setVideos, setPhotos, setNews } from '../../actions'
import Loader from '../Loader/Loader'
import ErrorPage from '../Error/Error'
import '../../main.scss'

class Home extends Component {
  constructor() {
    super()
    this.state = {
      isLoading: false,
      error: ''
    }
  }

  async componentDidMount() {
    const { tourDates, videos, news } = this.props
    if (!tourDates.length && !videos.length && !news.length) {
      this.setState({ isLoading: true })
      await this.getData('videos')
      await this.getData('tour_dates')
      await this.getData('news')
      this.setState({ isLoading: false })
    }
  }

  async getData(dataType) {
    try {
      const url = `https://mwo-be.herokuapp.com/api/v1/${dataType}`
      const response = await fetch(url)

      if (!response.ok) {
        const message = response.status + ' ' + response.statusText
        this.setState({ error: message })
      } else {
        const data = await response.json()
        this.handleStorage(data, dataType)
      }
    } catch (error) {
      this.setState({ error })
    }
  }

  handleStorage(data, dataType) {
    const methods = {
      tour_dates: this.props.setTourDates,
      videos: this.props.setVideos,
      photos: this.props.setPhotos,
      news: this.props.setNews
    }

    methods[dataType](data)
  }

  render() {
    const { tourDates, videos, news } = this.props

    if (this.state.isLoading) {
      return <Loader />
    }

    if (this.state.error.length) {
      return <ErrorPage message={this.state.error} />
    }

    let newsRender
    if (!news.length) {
      newsRender = <h2>loading news...</h2>
    } else {
      newsRender = news.map(item => {
        return (
          <div className="news-item" key={item.id}>
            <a href={item.link}  target="_blank" rel="noopener noreferrer">
              <h4>{item.title}</h4>
            </a>
            <img src={item.image_url} alt={item.title} />
            <p>{item.body}</p>
          </div>
        )
      })
    }

    let videoLink
    if (!videos.length) {
      videoLink = ''
    } else {
      videoLink = videos[0].link
    }

    let tourRender
    if (tourDates.length) {
      tourRender = (
        <tbody>
          {
            tourDates.map(date => {
              return (
                <tr key={date.id}>
                  <td>{date.day_of_week} {date.date}</td>
                  <td>
                    <a href={date.ticket_link}  target="_blank" rel="noopener noreferrer">{date.venue}</a>
                  </td>
                </tr>
              )
            })
          }
        </tbody>
      )
    }

    return (
      <section className="home-container">
        <section className="news-section">
          <h2>news</h2>
          {newsRender}
        </section>
        <section className="listen-section">
          <h2>listen</h2>
          <div>
            <iframe id="spotifyPlayer" src="https://open.spotify.com/embed/user/1243259682/playlist/1dvSwaN3D8PGP8zWNGz2UC" title="spotify player" width="350px" height="400px" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
          </div>
        </section>
        <section className="tour-section">
          <h2>tour</h2>
          <table cellSpacing="0" cellPadding="10">
            <thead>
              <tr>
                <th>date</th>
                <th>location</th>
              </tr>
            </thead>
            {tourRender}
          </table>
        </section>
        <section className="watch-section">
          <h2>watch</h2>
          <div>
            <iframe id="vid_frame" src={videoLink} frameBorder="0" width="450px" height="275px" title="youtube-player"></iframe>
          </div>
        </section>
      </section>
    )
  }
}

const mapStateToProps = state => ({
  tourDates: state.tourDates,
  videos: state.videos,
  photos: state.photos,
  news: state.news
})

const mapDispatchToProps = dispatch => ({
  setTourDates: dates => dispatch(setTourDates(dates)),
  setVideos: videos => dispatch(setVideos(videos)),
  setPhotos: photos => dispatch(setPhotos(photos)),
  setNews: news => dispatch(setNews(news))
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)