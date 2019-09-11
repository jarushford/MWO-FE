import React from 'react'
import { shallow } from 'enzyme'
import { mapStateToProps, mapDispatchToProps, Home } from '../Home'
import { setTourDates, setVideos, setPhotos, setNews } from '../../../actions'

describe('Home', () => {
  describe('mapStateToProps', () => {
    it('should return a props object with data from the store', () => {
      const state = {
        tourDates: [],
        videos: [],
        photos: [],
        news: [],
        user: {}
      }
      const expected = {
        tourDates: [],
        videos: [],
        photos: [],
        news: []
      }

      const result = mapStateToProps(state)

      expect(result).toEqual(expected)
    })
  })

  describe('mapDispatchToProps', () => {
    let mockDispatch

    beforeEach(() => {
      mockDispatch = jest.fn()
    })

    it('should return a props object with a method setTourDates', () => {
      const expected = setTourDates([])

      const mappedProps = mapDispatchToProps(mockDispatch)
      mappedProps.setTourDates([])

      expect(mockDispatch).toBeCalledWith(expected)
    })

    it('should return a props object with a method setVideos', () => {
      const expected = setVideos([])

      const mappedProps = mapDispatchToProps(mockDispatch)
      mappedProps.setVideos([])

      expect(mockDispatch).toBeCalledWith(expected)
    })

    it('should return a props object with a method setPhotos', () => {
      const expected = setPhotos([])

      const mappedProps = mapDispatchToProps(mockDispatch)
      mappedProps.setPhotos([])

      expect(mockDispatch).toBeCalledWith(expected)
    })

    it('should return a props object with a method setNews', () => {
      const expected = setNews([])

      const mappedProps = mapDispatchToProps(mockDispatch)
      mappedProps.setNews([])

      expect(mockDispatch).toBeCalledWith(expected)
    })
  })

  describe('Home component', () => {
    let wrapper, tourDates, videos, photos, news, setTourDates, setVideos, setPhotos, setNews

    beforeEach(() => {
      tourDates = [{
        id: 25,
        day_of_week: 'Monday',
        date: '23/34/1245',
        ticket_link: '234dsf',
        venue: 'venue'
      }]
      videos = [{
        link: 'link',
        title: 'sometitle',
        thumbnail: 'thumbnail pic',
        id: 123
      }]
      photos = [{
        link: 'link',
        description: 'some stuff',
        id: 23
      }]
      news = [{
        title: 'title',
        body: 'other stuff',
        link: 'link',
        image_url: 'stuff',
        id: 234
      }]
      setTourDates = jest.fn()
      setVideos = jest.fn()
      setPhotos = jest.fn()
      setNews = jest.fn()
      wrapper = shallow(<Home 
        tourDates={tourDates}
        videos={videos}
        photos={photos}
        news={news}
        setTourDates={setTourDates}
        setVideos={setVideos}
        setPhotos={setPhotos}
        setNews={setNews}
      />, { disableLifecycleMethods: true })
    })

    it('should match the default snapshot', () => {
      expect(wrapper).toMatchSnapshot()
    })

    it('should match the snapshot if isLoading is true', () => {
      wrapper.setState({ isLoading: true })

      expect(wrapper).toMatchSnapshot()
    })

    it('should match the snapshot if errored', () => {
      wrapper.setState({ error: 'oh no!' })

      expect(wrapper).toMatchSnapshot()
    })

    it('should match the snapshot with no news', () => {
      wrapper = shallow(<Home 
        tourDates={tourDates}
        videos={videos}
        photos={photos}
        news={[]}
        setTourDates={setTourDates}
        setVideos={setVideos}
        setPhotos={setPhotos}
        setNews={setNews}
      />, { disableLifecycleMethods: true })

      expect(wrapper).toMatchSnapshot()
    })

    it('should match the snapshot with no videos', () => {
      wrapper = shallow(<Home 
        tourDates={tourDates}
        videos={[]}
        photos={photos}
        news={news}
        setTourDates={setTourDates}
        setVideos={setVideos}
        setPhotos={setPhotos}
        setNews={setNews}
      />, { disableLifecycleMethods: true })

      expect(wrapper).toMatchSnapshot()
    })

    it('should match the snapshot with no tourDates', () => {
      wrapper = shallow(<Home 
        tourDates={[]}
        videos={videos}
        photos={photos}
        news={news}
        setTourDates={setTourDates}
        setVideos={setVideos}
        setPhotos={setPhotos}
        setNews={setNews}
      />, { disableLifecycleMethods: true })

      expect(wrapper).toMatchSnapshot()
    })

    it('should have the correct default state', () => {
      const expected = {
        isLoading: false,
        error: ''
      }

      expect(wrapper.state()).toEqual(expected)
    })

    describe('componentDidMount', () => {
      let spySetState, spyGetData

      beforeEach(() => {
        spySetState = jest.spyOn(wrapper.instance(), 'setState')
        spyGetData = jest.spyOn(wrapper.instance(), 'getData')
      })

      it('should do nothing if there is already data in store', async () => {
        await wrapper.instance().componentDidMount()

        expect(spySetState).toBeCalledTimes(0)
        expect(spyGetData).toBeCalledTimes(0)
      })

      it('should getData if it is missing from store', async () => {
        wrapper = shallow(<Home 
          tourDates={[]}
          videos={[]}
          photos={[]}
          news={[]}
          setTourDates={setTourDates}
          setVideos={setVideos}
          setPhotos={setPhotos}
          setNews={setNews}
        />, { disableLifecycleMethods: true })

        spySetState = jest.spyOn(wrapper.instance(), 'setState')
        spyGetData = jest.spyOn(wrapper.instance(), 'getData').mockImplementation(() => true)

        await wrapper.instance().componentDidMount()

        expect(spySetState).toHaveBeenNthCalledWith(1, { isLoading: true })
        expect(spyGetData).toHaveBeenNthCalledWith(1, 'videos')
        expect(spyGetData).toHaveBeenNthCalledWith(2, 'tour_dates')
        expect(spyGetData).toHaveBeenNthCalledWith(3, 'news')
        expect(spySetState).toHaveBeenNthCalledWith(2, { isLoading: false })
      })
    })

    describe('getData', () => {
      it('should setState of error message if response is not ok', async () => {
        window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
          ok: false,
          status: 400,
          statusText: 'Oh no!'
        }))

        await wrapper.instance().getData('videos')

        expect(wrapper.state().error).toEqual('400 Oh no!')
      })

      it('should call handleStorage if response is ok', async () => {
        window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
          ok: true,
          json: () => []
        }))

        const spy = jest.spyOn(wrapper.instance(), 'handleStorage')

        await wrapper.instance().getData('videos')

        expect(spy).toBeCalledWith([], 'videos')
      })

      it('should setState of error if there is an unhandled server error', async () => {
        window.fetch = jest.fn().mockImplementation(() => {
          throw Error('Oh no!')
        })

        await wrapper.instance().getData('tour_dates')

        expect(wrapper.state().error).toEqual(Error('Oh no!'))
      })
    })

    describe('handleStorage', () => {
      it('should call setTourDates when that type is passed in', () => {
        wrapper.instance().handleStorage([], 'tour_dates')

        expect(setTourDates).toBeCalledWith([])
      })

      it('should call setVideos when that type is passed in', () => {
        wrapper.instance().handleStorage([], 'videos')

        expect(setVideos).toBeCalledWith([])
      })

      it('should call setPhotos when that type is passed in', () => {
        wrapper.instance().handleStorage([], 'photos')

        expect(setPhotos).toBeCalledWith([])
      })

      it('should call setNews when that type is passed in', () => {
        wrapper.instance().handleStorage([], 'news')

        expect(setNews).toBeCalledWith([])
      })
    })
  })
})