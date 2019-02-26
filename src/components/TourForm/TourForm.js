import React, { Component } from 'react'
import '../../main.scss'

export default class TourForm extends Component {
  constructor() {
    super()
    this.state = {
      day_of_week: '',
      date: '',
      city: '',
      venue: '',
      ticket_link: '',
      venue_link: '',
    }
  }

  updateValue = (e, input) => {
    this.setState({
      [input]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.setState({
      day_of_week: '',
      date: '',
      city: '',
      venue: '',
      ticket_link: '',
      venue_link: '',
    })
    this.props.addDate(this.state)
  }
  
  render() {
    const { showForm } = this.props
    const { day_of_week, date, city, venue, ticket_link, venue_link } = this.state

    return (
      <form
        className={`form ${showForm && 'visible'}`}
        onSubmit={this.handleSubmit}
      >
        <input
          type="text"
          placeholder="day_of_week"
          value={day_of_week}
          onChange={e => this.updateValue(e, 'day_of_week')}
        />
        <input
          type="text"
          placeholder="date"
          value={date}
          onChange={e => this.updateValue(e, 'date')}
        />
        <input
          type="text"
          placeholder="city"
          value={city}
          onChange={e => this.updateValue(e, 'city')}
        />
        <input
          type="text"
          placeholder="venue"
          value={venue}
          onChange={e => this.updateValue(e, 'venue')}
        />
        <input
          type="text"
          placeholder="ticket_link"
          value={ticket_link}
          onChange={e => this.updateValue(e, 'ticket_link')}
        />
        <input
          type="text"
          placeholder="venue_link"
          value={venue_link}
          onChange={e => this.updateValue(e, 'venue_link')}
        />
        <button>Submit</button>
      </form>
    )
  }
}