import React, { useState, useEffect } from 'react'
import '../../../main.scss'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

export function AdminMailing({ user }) {
  const [contacts, setContacts] = useState([])

  const getContacts = async () => {
    const url = 'https://mwo-be.herokuapp.com/api/v1/mailing'
    const response = await fetch(url)
    if (!response.ok) {
      alert('Error fetching data, please try again later')
    } else {
      const result = await response.json()
      const contacts = result.map(contact => {
        return (
          <li key={contact.email}>{contact.email}</li>
      )})
      setContacts(contacts)
    }
  }

  useEffect(() => {
    getContacts()
  }, [contacts])

  if (!user) {
    return <Redirect to="/admin" />
  } else {
    return (
      <div className="admin-photo">
        <h1 className="admin-title">Mailing</h1>
        <ul className="mailing-container">
          {contacts}
        </ul>
      </div>
    )
  }
}

export const mapStateToProps = (state) => ({
  user: state.user
})

export default connect(mapStateToProps)(AdminMailing)