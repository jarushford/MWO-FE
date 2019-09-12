import React, { Component } from 'react'
import PropTypes from 'prop-types'
import '../../main.scss'

export default class NewsForm extends Component {
  constructor() {
    super()
    this.state = {
      title: '',
      body: '',
      link: ''
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
            image_url: result.info.secure_url,
            title: this.state.title,
            body: this.state.body,
            link: this.state.link
          })
          this.setState({ 
            title: '',
            body: '',
            link: ''
          })
        }
      }
    )
  }

  addPhoto = async (data) => {
    const url = 'https://mwo-be.herokuapp.com/api/v1/news'
    await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    })
  }
  
  render() {
    const { showForm } = this.props
    const { title, body, link } = this.state

    return (
      <form
        className={`form ${showForm && 'visible'}`}
        onSubmit={this.handleSubmit}
      >
        <input
          type="text"
          placeholder="title"
          value={title}
          onChange={e => this.updateValue(e, 'title')}
        />
        <input
          type="text"
          placeholder="body"
          value={body}
          onChange={e => this.updateValue(e, 'body')}
        />
        <input
          type="text"
          placeholder="link"
          value={link}
          onChange={e => this.updateValue(e, 'link')}
        />
        <button onClick={this.handleUpload}>Upload & Submit</button>
      </form>
    )
  }
}

NewsForm.propTypes = {
  showForm: PropTypes.bool.isRequired
}