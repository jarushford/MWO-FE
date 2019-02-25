import React, { useState } from 'react'

export function AdminLogin() {
  const [email, updateEmail] = useState('')
  const [password, updatePassword] = useState('')

  return (
    <div className="admin-login">
      <h1>Login</h1>
      <form
        className="login-form"
        onSubmit={e => handleSubmit(e, email, password)}
      >
        <input
          type="text"
          placeholder="email"
          value={email}
          onChange={e => updateEmail(e.target.value)}
        />
        <input
          type="text"
          placeholder="password"
          value={password}
          onChange={e => updatePassword(e.target.value)}
        />
        <button>Login</button>
      </form>
    </div>
  )
}

export function handleSubmit(e, email, password) {
  e.preventDefault()

}