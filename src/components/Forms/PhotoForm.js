import React, { Component } from 'react'
import '../../main.scss'

export default class PhotoForm extends Component {
  constructor() {
    super()
    this.state = {
      description: ''
    }
  }

  updateValue = (e, input) => {
    this.setState({
      [input]: e.target.value
    })
  }

  handleUpload = e => {
    e.preventDefault()
    window.cloudinary.openUploadWidget(
      { cloud_name: 'mad-wallace', upload_preset: 'xscksodf', tags: [] },
      async (error, result) => {
        if (result.info.secure_url) {
          await this.addPhoto({
            link: result.info.secure_url,
            description: this.state.description
          })
          this.setState({ description: '' })
        }
      }
    )
  }

  addPhoto = async (data) => {
    const url = 'https://mwo-be.herokuapp.com/api/v1/photos'
    await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    })
  }
  
  render() {
    const { showForm } = this.props
    const { description } = this.state

    return (
      <form
        className={`form ${showForm && 'visible'}`}
        onSubmit={this.handleSubmit}
      >
        <input
          type="text"
          placeholder="day_of_week"
          value={description}
          onChange={e => this.updateValue(e, 'description')}
        />
        <button onClick={this.handleUpload}>Upload & Submit</button>
      </form>
    )
  }
}