import React, { Component } from 'react'
import '../../main.scss'

export default class NewsForm extends Component {
  constructor() {
    super()
    this.state = {
      title: '',
      link: '',
      thumbnail: ''
    }
  }

  updateValue = (e, input) => {
    this.setState({
      [input]: e.target.value
    })
  }

  handleUpload = async e => {
    e.preventDefault()
    console.log(this.state)
    await this.addVideo({
      title: this.state.title,
      link: this.state.link,
      thumbnail: this.state.thumbnail
    })
  }

  addVideo = async (data) => {
    const url = 'https://mwo-be.herokuapp.com/api/v1/videos'
    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    })
    if (response.ok) {
      this.setState({ 
        title: '',
        link: '',
        thumbnail: ''
      })
    }
  }
  
  render() {
    const { showForm } = this.props
    const { title, link, thumbnail } = this.state

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
          placeholder="link"
          value={link}
          onChange={e => this.updateValue(e, 'link')}
        />
        <input
          type="text"
          placeholder="thumbnail"
          value={thumbnail}
          onChange={e => this.updateValue(e, 'thumbnail')}
        />
        <button onClick={this.handleUpload}>Submit</button>
      </form>
    )
  }
}