import React, { useState } from 'react'
import { sha256 } from 'js-sha256'
import { Redirect } from 'react-router-dom'

export default function AdminLogin() {
  const [email, updateEmail] = useState('')
  const [password, updatePassword] = useState('')
  const [isLoggedIn, setLogin] = useState(false)
  const [hasErrored, setError] = useState(false)

  const handleSubmit = async e => {
    e.preventDefault()
    const hashedPassword = sha256(password)
    const user = { email, password: hashedPassword }
    const url = 'https://mwo-be.herokuapp.com/api/v1/login'
    
    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(user)
    })

    !response.ok
      ? setError(true)
      : setLogin(true)
  }

  if (isLoggedIn) {
    return <Redirect to="/" />
  }

  return (
    <div className="admin-login">
      <h1>Login</h1>
      <p className={`err-msg ${hasErrored && 'error'}`}>
        Incorrect username or password
      </p>
      <form
        className="login-form"
        onSubmit={e => {
          return handleSubmit(e)
        }}
      >
        <input
          type="text"
          placeholder="email"
          value={email}
          onChange={e => updateEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={e => updatePassword(e.target.value)}
        />
        <button>Login</button>
      </form>
    </div>
  )
}