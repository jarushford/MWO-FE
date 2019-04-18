import React, { Component } from 'react'
import Loader from '../Loader/Loader'
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

  getDatesRender = () => {
    const { tourDates } = this.state
    const sortedDates = tourDates.sort((a, b) => {
      return this.dateHelper(a.date) - this.dateHelper(b.date)
    })
    const mappedDates = sortedDates.map(date => {
        return (
          <tr key={date.id}>
            <td>{date.day_of_week} {date.date}</td>
            <td>{date.venue}</td>
            <td>{date.city}</td>
            <td>
              <a href={date.ticket_link} target="_blank" rel="noopener noreferrer" >
                <button className="tickets-btn">Tickets</button>
              </a>
            </td>
          </tr>
        )
      })

    return mappedDates
  }

  dateHelper = date => {
    return date.substring(0, 2) + date.substring(3, 5)
  }

  render() {
    let noDates
    let tourDates

    if (this.state.isLoading) {
      noDates = <Loader />
    } else if (!this.state.tourDates.length) {
      noDates = <h3>No tour dates right now, check back soon!</h3>
    } else {
      tourDates = this.getDatesRender()
    }

    const tableHeaders = ['when', 'where', 'wait... where?', 'how']

    return (
      <section className="tour-container">
        <h1>tour</h1>
        <table cellSpacing="0" cellPadding="10">
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