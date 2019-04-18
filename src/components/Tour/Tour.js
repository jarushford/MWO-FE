import React, { Component } from 'react'
import '../../main.scss'

export default class Tour extends Component {
  constructor() {
    super()
    this.state = {
      tourDates: [],
      isLoading: false
    }
  }

  componentDidMount() {
   this.getTourDates() 
  }

  getTourDates = async () => {
    try {
      this.setState({ isLoading: true })
      const url = 'https://mwo-be.herokuapp.com/api/v1/tour_dates'
      const response = await fetch(url)

      if (!response.ok) {
        // set error action
      } else {
        const tourDates = await response.json()
        this.setState({ tourDates, isLoading: false })
      }
    } catch (error) {
      // set error action
    }
  }

  render() {
    let noDates
    let tourDates

    if (this.state.isLoading) {
      noDates = <h3>Loading ...</h3>
      // use react loader later
    } else if (!this.state.tourDates.length) {
      noDates = <h3>No tour dates right now, check back soon!</h3>
    } else {
      tourDates = this.state.tourDates.map(date => {
        return (
          <tr key={date.id}>
            <td>{date.day_of_week} {date.date}</td>
            <td>{date.venue}</td>
            <td>{date.city}</td>
            <td>
              <a href={date.ticket_link}>
                <button>Tickets</button>
              </a>
            </td>
          </tr>
        )
      })
    }

    const tableHeaders = ['when', 'where', 'wait... where?', 'how']

    return (
      <section className="tour-container">
        <table>
          <thead>
            <tr>
              {
                tableHeaders.map(header => {
                  return <th key={header}>{header}</th>
                })
              }
            </tr>
          </thead>
          <tbody>
            {tourDates}
          </tbody>
        </table>
        {noDates}
      </section>
    )
  }
}