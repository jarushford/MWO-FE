import React, { useState, useEffect } from 'react'
import '../../main.scss'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import NewsForm from '../Forms/NewsForm'

export function AdminNews({ user }) {
  const [news, setNews] = useState([])
  const [showForm, setForm] = useState(false)

  const getNews = async () => {
    const url = 'https://mwo-be.herokuapp.com/api/v1/news'
    const response = await fetch(url)
    if (!response.ok) {
      alert('Error fetching data, please try again later')
    } else {
      const result = await response.json()
      const photos = result.map(news => {
        return (
          <div key={news.id} className="photo">
            <img src={news.link} alt={news.description} />
            <div>
              <h3>{news.title}</h3>
              <p>{news.body}</p>
              <button onClick={() => removeNews(news.id)}>Remove</button>
            </div>
          </div>
      )})
      setNews(photos)
    }
  }

  const removeNews = async (id) => {
    const url = `https://mwo-be.herokuapp.com/api/v1/news/${id}`
    await fetch(url, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' }
    })
  }

  useEffect(() => {
    getNews()
  }, [news])

  if (!user) {
    return <Redirect to="/admin" />
  } else {
    return (
      <div className="admin-news">
        <h1 className="admin-title">News</h1>
        <button
          className="add-btn"
          onClick={() => setForm(!showForm)}
        >
          Add Item
        </button>
        <NewsForm showForm={showForm} />
        <div className="news-container">
          {news}
        </div>
      </div>
    )
  }
}

export const mapStateToProps = (state) => ({
  user: state.user
})

export default connect(mapStateToProps)(AdminNews)