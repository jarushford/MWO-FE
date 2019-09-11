import React from 'react'
import * as actions from '../index'

describe('actions', () => {
  it('setUser should return an object with a type SET_USER and a user', () => {
    const user = { name: 'Jamie' }
    const expected = {
      type: 'SET_USER',
      user
    }

    const result = actions.setUser(user)

    expect(result).toEqual(expected)
  })

  it('setTourDates should return an object with a type SET_TOUR_DATES and an array of tour dates', () => {
    const tourDates = [
      { location: 'Denver', date: '11/11/19' },
      { location: 'Boulder', date: '12/11/19' }
    ]
    const expected = {
      type: 'SET_TOUR_DATES',
      dates: tourDates
    }

    const result = actions.setTourDates(tourDates)

    expect(result).toEqual(expected)
  })

  it('setVideos should return an object with a type SET_VIDEOS and an array of videos', () => {
    const videos = [
      { url: 'someurl' },
      { url: 'someotherurl' }
    ]
    const expected = {
      type: 'SET_VIDEOS',
      videos
    }

    const result = actions.setVideos(videos)

    expect(result).toEqual(expected)
  })
  
  it('setPhotos should return an object with a type SET_PHOTOS and an array of photos', () => {
    const photos = [
      { name: 'aphoto' },
      { name: 'anotherphoto' }
    ]
    const expected = {
      type: 'SET_PHOTOS',
      photos
    }

    const result = actions.setPhotos(photos)

    expect(result).toEqual(expected)
  })

  it('setNews should return an object with a type SET_NEWS and an array of news items', () => {
    const news = [
      { title: 'news!' },
      { title: 'more news!' }
    ]
    const expected = {
      type: 'SET_NEWS',
      news
    }

    const result = actions.setNews(news)

    expect(result).toEqual(expected)
  })
})