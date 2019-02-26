import React, { useState, useEffect } from 'react'
import '../../main.scss'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import PhotoForm from '../Forms/PhotoForm'

export function AdminPhotos({ user }) {
  const [photos, setPhotos] = useState([])
  const [showForm, setForm] = useState(false)

  const getPhotos = async () => {
    const url = 'https://mwo-be.herokuapp.com/api/v1/photos'
    const response = await fetch(url)
    if (!response.ok) {
      alert('Error fetching data, please try again later')
    } else {
      const result = await response.json()
      const photos = result.map(photo => {
        return (
          <div key={photo.id} className="photo">
            <img src={photo.link} alt={photo.description} />
            <button onClick={() => removePhoto(photo.id)}>Remove</button>
          </div>
      )})
      setPhotos(photos)
    }
  }

  const removePhoto = async (id) => {
    const url = `https://mwo-be.herokuapp.com/api/v1/photos/${id}`
    await fetch(url, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' }
    })
  }

  const addPhoto = async (data) => {
    const url = 'https://mwo-be.herokuapp.com/api/v1/photos'
    await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    })
  }

  useEffect(() => {
    getPhotos()
  }, [photos])

  if (!user) {
    return <Redirect to="/admin" />
  } else {
    return (
      <div className="admin-photo">
        <h1 className="admin-title">Photos</h1>
        <button
          className="add-btn"
          onClick={() => setForm(!showForm)}
        >
          Add Photo
        </button>
        <PhotoForm showForm={showForm} addPhoto={addPhoto} />
        <div className="photo-container">
          {photos}
        </div>
      </div>
    )
  }
}

export const mapStateToProps = (state) => ({
  user: state.user
})

export default connect(mapStateToProps)(AdminPhotos)