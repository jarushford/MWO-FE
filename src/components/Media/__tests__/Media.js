import React from 'react'
import { shallow } from 'enzyme'
import { mapStateToProps, mapDispatchToProps, Media } from '../Media'
import { setVideos, setPhotos } from '../../../actions'

describe('Media', () => {
  describe('mapStateToProps', () => {
    it('should return a props object with data from the store', () => {
      const state = {
        videos: [],
        photos: [],
        otherStuff: []
      }
      const expected = {
        videos: [],
        photos: []
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
  })

  describe('Media component', () => {
    let wrapper, videos, photos, setVideos, setPhotos

    beforeEach(() => {
      videos = [{
        link: 'link',
        id: 234,
        thumbnail: 'thumb',
        title: 'Stuff!'
      }]
      photos = [{
        link: 'a link',
        description: 'more stuff!'
      }]
      setVideos = jest.fn()
      setPhotos = jest.fn()
      wrapper = shallow(<Media 
        videos={videos}
        photos={photos}
        setVideos={setVideos}
        setPhotos={setPhotos}
      />, { disableLifecycleMethods: true })
    })

    it('should match the default snapshot', () => {
      expect(wrapper).toMatchSnapshot()
    })

    it('should match the snapshot when loading', () => {
      wrapper.setState({ isLoading: true })

      expect(wrapper).toMatchSnapshot()
    })

    it('should match the snapshot when errored', () => {
      wrapper.setState({ error: 'done fucked up' })

      expect(wrapper).toMatchSnapshot()
    })

    it('should match the snapshot with no videos', () => {
      wrapper = shallow(<Media 
        videos={[]}
        photos={photos}
        setVideos={setVideos}
        setPhotos={setPhotos}
      />, { disableLifecycleMethods: true })

      expect(wrapper).toMatchSnapshot()
    })

    it('should match the snapshot with no photos', () => {
      wrapper = shallow(<Media 
        videos={videos}
        photos={[]}
        setVideos={setVideos}
        setPhotos={setPhotos}
      />, { disableLifecycleMethods: true })

      expect(wrapper).toMatchSnapshot()
    })

    it('should have the correct default state', () => {
      const expected = {
        videos: [],
        photos: [],
        currentImage: 0,
        isLoading: false,
        error: ''
      }

      expect(wrapper.state()).toEqual(expected)
    })

    it('should reset the src of the video viewer when one is clicked on', () => {
      wrapper.instance().componentDidMount()
      document.getElementById = jest.fn().mockImplementation(() => ({
        src: 'stuff'
      }))

      wrapper.find('.thumbnail-container img').simulate('click')

      expect(wrapper.find('#vid_frame').prop('src')).toEqual('link')
    })

    describe('componentDidMount', () => {
      it('should setState of photos and videos if they are already in the store', () => {
        wrapper.instance().componentDidMount()

        expect(wrapper.state().videos).toEqual([{
          link: 'link',
          id: 234,
          thumbnail: 'thumb',
          title: 'Stuff!'
        }])

        expect(wrapper.state().photos).toEqual([{
          link: 'a link',
          description: 'more stuff!'
        }])
      })

      it('should getVideos and getPhotos if they are not already in store', async () => {
        wrapper = shallow(<Media 
          videos={[]}
          photos={[]}
          setVideos={setVideos}
          setPhotos={setPhotos}
        />, { disableLifecycleMethods: true })

        const stateSpy = jest.spyOn(wrapper.instance(), 'setState')
        const videoSpy = jest.spyOn(wrapper.instance(), 'getVideos').mockImplementation(() => true)
        const photoSpy = jest.spyOn(wrapper.instance(), 'getPhotos').mockImplementation(() => true)

        await wrapper.instance().componentDidMount()

        expect(stateSpy).toHaveBeenNthCalledWith(1, { isLoading: true })
        expect(videoSpy).toBeCalled()
        expect(photoSpy).toBeCalled()
        expect(stateSpy).toHaveBeenNthCalledWith(2, { isLoading: false })
      })
    })

    describe('getVideos', () => {
      it('should setState of error if response is not ok', async () => {
        window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
          ok: false,
          status: 401,
          statusText: 'No!'
        }))

        await wrapper.instance().getVideos()

        expect(wrapper.state().error).toEqual('401 No!')
      })

      it('should setState of error if an unhandled server error occurs', async () => {
        window.fetch = jest.fn().mockImplementation(() => {
          throw Error('Ahhh!')
        })

        await wrapper.instance().getVideos()

        expect(wrapper.state().error).toEqual(Error('Ahhh!'))
      })

      it('should setState of photos if response is ok', async () => {
        window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
          ok: true,
          json: () => []
        }))

        await wrapper.instance().getVideos()

        expect(wrapper.state().videos).toEqual([])
        expect(setVideos).toBeCalledWith([])
      })
    })

    describe('getPhotos', () => {
      it('should setState of error if response is not ok', async () => {
        window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
          ok: false,
          status: 401,
          statusText: 'No!'
        }))

        await wrapper.instance().getPhotos()

        expect(wrapper.state().error).toEqual('401 No!')
      })

      it('should setState of error if an unhandled server error occurs', async () => {
        window.fetch = jest.fn().mockImplementation(() => {
          throw Error('Ahhh!')
        })

        await wrapper.instance().getPhotos()

        expect(wrapper.state().error).toEqual(Error('Ahhh!'))
      })

      it('should setState of photos if response is ok', async () => {
        window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
          ok: true,
          json: () => []
        }))

        await wrapper.instance().getPhotos()

        expect(wrapper.state().photos).toEqual([])
        expect(setPhotos).toBeCalledWith([])
      })
    })

    describe('nextPhoto', () => {
      let wrapper

      beforeEach(() => {
        wrapper = shallow(<Media 
          videos={videos}
          photos={[
            {
              link: 'a link',
              description: 'more stuff!',
              id: 1
            },
            {
              link: 'another link',
              description: 'more stuffs!',
              id: 2
            }
          ]}
          setVideos={setVideos}
          setPhotos={setPhotos}
        />, { disableLifecycleMethods: true })
      })

      it('should set currentImage to 0 if at end of carousel', () => {
        wrapper.instance().componentDidMount()
        wrapper.setState({ currentImage: 1 })
        wrapper.instance().nextPhoto(1)

        expect(wrapper.state().currentImage).toEqual(0)
      })

      it('should go to the last photo if backwards at start', () => {
        wrapper.instance().componentDidMount()
        wrapper.setState({ currentImage: 0 })
        wrapper.instance().nextPhoto(-1)

        expect(wrapper.state().currentImage).toEqual(1)
      })

      it('should advance photos normally in any other case', () => {
        wrapper.instance().componentDidMount()
        wrapper.setState({ currentImage: 0 })
        wrapper.instance().nextPhoto(1)

        expect(wrapper.state().currentImage).toEqual(1)
      })

      it('should call nextPhoto with -1 when left arrow is clicked', () => {
        const spy = jest.spyOn(wrapper.instance(), 'nextPhoto')

        wrapper.find('.photos-container .fa-caret-left').simulate('click')

        expect(spy).toBeCalledWith(-1)
      })

      it('should call nextPhoto with 1 when right arrow is clicked', () => {
        const spy = jest.spyOn(wrapper.instance(), 'nextPhoto')

        wrapper.find('.photos-container .fa-caret-right').simulate('click')

        expect(spy).toBeCalledWith(1)
      })
    })

    describe('handleVideoScroll', () => {
      it('should call handleVideoScroll with -1 when left arrow is clicked', () => {
        wrapper.instance().componentDidMount()
        document.getElementById = jest.fn().mockImplementation(() => ({
          scrollLeft: 0,
          scrollTo: jest.fn()
        }))
        const spy = jest.spyOn(wrapper.instance(), 'handleVideoScroll')

        wrapper.find('.vid-carousel .fa-caret-left').simulate('click')

        expect(spy).toBeCalledWith(-1)
      })

      it('should call handleVideoScroll with -1 when left arrow is clicked and scrollLeft is > 150', () => {
        wrapper.instance().componentDidMount()
        document.getElementById = jest.fn().mockImplementation(() => ({
          scrollLeft: 160,
          scrollTo: jest.fn(),
          scrollBy: jest.fn()
        }))
        const spy = jest.spyOn(wrapper.instance(), 'handleVideoScroll')

        wrapper.find('.vid-carousel .fa-caret-left').simulate('click')

        expect(spy).toBeCalledWith(-1)
      })

      it('should call handleVideoScroll with 1 when right arrow is clicked', () => {
        wrapper.instance().componentDidMount()
        document.getElementById = jest.fn().mockImplementation(() => ({
          scrollLeft: 0,
          scrollTo: jest.fn(),
          scrollBy: jest.fn()
        }))
        const spy = jest.spyOn(wrapper.instance(), 'handleVideoScroll')

        wrapper.find('.vid-carousel .fa-caret-right').simulate('click')

        expect(spy).toBeCalledWith(1)
      })

      it('should not change if handleVideoScroll is called with anything but 1 and -1', () => {
        wrapper.instance().componentDidMount()
        const methods = {
          scrollLeft: 0,
          scrollTo: jest.fn(),
          scrollBy: jest.fn()
        }
        document.getElementById = jest.fn().mockImplementation(() => methods)

        wrapper.instance().handleVideoScroll(2)

        expect(methods.scrollTo).toBeCalledTimes(0)
      })
    })
  })
})