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

  componentDidMount() {
    this.setState({ isLoading: true })
    this.getData('tour_dates')
    this.getData('videos')
    this.getData('photos')
    this.getData('news')
    this.setState({ isLoading: false })
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
    if (this.state.isLoading) {
      return <Loader />
    }

    if (this.state.error.length) {
      return <ErrorPage message={this.state.error} />
    }

    console.log(this.props.tourDates)
    console.log(this.props.videos)
    console.log(this.props.photos)
    console.log(this.props.news)

    return (
      <section className="home-container">
      
      
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