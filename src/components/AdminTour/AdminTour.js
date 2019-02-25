import React, { useState, useEffect } from 'react'
import '../../main.scss'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

export function AdminTour({ user }) {
  const [dates, setDates] = useState([])

  const getDates = async () => {
    const url = 'https://mwo-be.herokuapp.com/api/v1/tour_dates'
    const response = await fetch(url)
    if (!response.ok) {
      alert('Error fetching data, please try again later')
    } else {
      const result = await response.json()
      const dates = result.map(date => {
        return (
          <div key={date.id}>
            <h3>{date.day_of_week} {date.date}</h3>
            <a href={date.venue_link}><h5>{date.venue}</h5></a>
            <h5>{date.city}</h5>
            <a href={date.ticket_link}><button>Tickets</button></a>
          </div>
      )})
      setDates(dates)
    }
  }

  useEffect(() => {
    getDates()
  }, [])

  if (!user) {
    return <Redirect to="/admin" />
  } else {
    return (
      <div className="admin-tour">
        <h1 className="admin-title">Tour</h1>
        {dates}
      </div>
    )
  }
}

export const mapStateToProps = (state) => ({
  user: state.user
})

export default connect(mapStateToProps)(AdminTour)