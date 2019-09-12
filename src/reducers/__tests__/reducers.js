import React from 'react'
import newsReducer from '../newsReducer'
import photosReducer from '../photosReducer'
import tourDatesReducer from '../tourDatesReducer'
import userReducer from '../userReducer'
import videosReducer from '../videosReducer'

describe('reducers', () => {
  describe('newsReducer', () => {
    it('should return the correct default state', () => {
      const result = newsReducer(undefined, {})

      expect(result).toEqual([])
    })

    it('should return an array of news items for action.type SET_NEWS', () => {
      const action = { type: 'SET_NEWS', news: [{ title: 'hi!' }] }
      const result = newsReducer([], action)

      expect(result).toEqual(action.news)
    })
  })

  describe('photosReducer', () => {
    it('should return the correct default state', () => {
      const result = photosReducer(undefined, {})

      expect(result).toEqual([])
    })

    it('should return an array of photos for action.type SET_PHOTOS', () => {
      const action = { type: 'SET_PHOTOS', photos: [{ alt: 'hi!' }] }
      const result = photosReducer([], action)

      expect(result).toEqual(action.photos)
    })
  })

  describe('tourDatesReducer', () => {
    it('should return the correct default state', () => {
      const result = tourDatesReducer(undefined, {})

      expect(result).toEqual([])
    })

    it('should return an array of tourdates for action.type SET_TOUR_DATES', () => {
      const action = { type: 'SET_TOUR_DATES', dates: [{ city: 'Burlington' }] }
      const result = tourDatesReducer([], action)

      expect(result).toEqual(action.dates)
    })
  })

  describe('userReducer', () => {
    it('should return the correct default state', () => {
      const result = userReducer(undefined, {})

      expect(result).toEqual(false)
    })

    it('should return a boolean whether a user is logged in for action.type SET_USER', () => {
      const action = { type: 'SET_USER', user: true }
      const result = userReducer(undefined, action)

      expect(result).toEqual(true)
    })
  })

  describe('videosReducer', () => {
    it('should return the correct default state', () => {
      const result = videosReducer(undefined, {})

      expect(result).toEqual([])
    })

    it('should return an array of videos for action.type SET_VIDEOS', () => {
      const action = { type: 'SET_VIDEOS', videos: [{ title: 'Stuff!' }] }
      const result = videosReducer([], action)

      expect(result).toEqual(action.videos)
    })
  })
})