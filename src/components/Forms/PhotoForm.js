import React, { Component } from 'react'
import '../../main.scss'

export default class PhotoForm extends Component {
  constructor() {
    super()
    this.state = {
      link: null,
      description: ''
    }
    this.updatePhoto = this.updatePhoto.bind(this)
  }

  updateValue = (e, input) => {
    this.setState({
      [input]: e.target.value
    })
  }

  updatePhoto = () => {
    var file = this.refs.file.files[0];
    var reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = function (e) {
        this.setState({
            link: [reader.result]
        })
      }.bind(this);
  }

  handleSubmit = async (e) => {
    e.preventDefault()
    await this.updatePhoto()
    // Do cloudinary fetch here then set url into state before adding photo
    this.setState({
      link: '',
      description: ''
    })
    this.props.addPhoto(this.state)
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
        <input
          type="file"
          ref="file" 
          onChange={this.updatePhoto}
        />
        <button>Submit</button>
      </form>
    )
  }
}