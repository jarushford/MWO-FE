import React, { useState, useEffect } from 'react'
import '../../../main.scss'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import VideoForm from '../../Forms/VideoForm'

export function AdminVideos({ user }) {
  const [videos, setVideos] = useState([])
  const [showForm, setForm] = useState(false)

  const getVideos = async () => {
    const url = 'https://mwo-be.herokuapp.com/api/v1/videos'
    const response = await fetch(url)
    if (!response.ok) {
      alert('Error fetching data, please try again later')
    } else {
      const result = await response.json()
      const videos = result.map(video => {
        return (
          <div key={video.id} className="video">
            <p>{video.title}</p>
            <a className="video-link" href={video.link}>{video.link}</a>
            <img src={video.thumbnail} alt="video thumbnail" />
            <button onClick={() => removeVideo(video.id)}>Remove</button>
          </div>
      )})
      setVideos(videos)
    }
  }

  const removeVideo = async (id) => {
    const url = `https://mwo-be.herokuapp.com/api/v1/videos/${id}`
    await fetch(url, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' }
    })
  }

  useEffect(() => {
    getVideos()
  }, [videos])

  if (!user) {
    return <Redirect to="/admin" />
  } else {
    return (
      <div className="admin-photo">
        <h1 className="admin-title">Videos</h1>
        <button
          className="add-btn"
          onClick={() => setForm(!showForm)}
        >
          Add Video
        </button>
        <VideoForm showForm={showForm} />
        <div className="video-container">
          {videos}
        </div>
      </div>
    )
  }
}

export const mapStateToProps = (state) => ({
  user: state.user
})

export default connect(mapStateToProps)(AdminVideos)