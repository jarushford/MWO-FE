import React from 'react'
import { shallow } from 'enzyme'
import { mapStateToProps, mapDispatchToProps, Tour } from '../Tour'
import { setTourDates } from '../../../actions'

describe('Tour', () => {
  describe('mapStateToProps', () => {
    it('should return a props object with data from the store', () => {
      const state = {
        tourDates: [],
        otherThings: 'sdfkjhlsief'
      }
      const expected = {
        tourDates: []
      }

      const result = mapStateToProps(state)

      expect(result).toEqual(expected)
    })
  })

  describe('mapDispatchToProps', () => {
    it('should return a props object with a method setTourDates', () => {
      const mockDispatch = jest.fn()
      const expected = setTourDates([])

      const mappedProps = mapDispatchToProps(mockDispatch)
      mappedProps.setTourDates([])

      expect(mockDispatch).toBeCalledWith(expected)
    })
  })

  describe('Tour component', () => {
    let wrapper, tourDates, setTourDates

    beforeEach(() => {
      setTourDates = jest.fn()
      tourDates = [
        {
          id: 123,
          day_of_week: 'Friday',
          date: '12/12/1212',
          venue: 'Place',
          city: 'Town',
          ticket_link: 'isfs4fijrhxdff'
        },
        {
          id: 123,
          day_of_week: 'Friday',
          date: '12/23/1212',
          venue: 'Place',
          city: 'Town',
          ticket_link: 'isfs4fijrhxdff'
        }
      ]
      wrapper = shallow(<Tour 
        tourDates={tourDates}
        setTourDates={setTourDates}
      />, { disableLifecycleMethods: true })
    })

    it('should match the default snapshot', () => {
      expect(wrapper).toMatchSnapshot()
    })

    it('should match the snapshot if errored', () => {
      wrapper.setState({ error: 'Bad stuff!' })

      expect(wrapper).toMatchSnapshot()
    })

    it('should match the snapshot if loading', () => {
      wrapper.setState({ isLoading: true })

      expect(wrapper).toMatchSnapshot()
    })

    it('should match the snapshot with no tour dates', () => {
      wrapper = shallow(<Tour 
        tourDates={[]}
        setTourDates={setTourDates}
      />, { disableLifecycleMethods: true })

      expect(wrapper).toMatchSnapshot()
    })

    it('should have the correct default state', () => {
      const expected = {
        tourDates: [],
        isLoading: false,
        error: ''
      }

      expect(wrapper.state()).toEqual(expected)
    })

    describe('componentDidMount', () => {
      it('should setState of tourdates if they are in the store already', () => {
        wrapper.instance().componentDidMount()

        expect(wrapper.state().tourDates).toEqual(tourDates)
      })

      it('should call getTourDates if they are not in the store already', () => {
        wrapper = shallow(<Tour 
          tourDates={[]}
          setTourDates={setTourDates}
        />, { disableLifecycleMethods: true })

        const spy = jest.spyOn(wrapper.instance(), 'getTourDates')

        wrapper.instance().componentDidMount()

        expect(spy).toBeCalled()
      })
    })

    describe('getTourDates', () => {
      it('should setState of error if response is not ok', async () => {
        window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
          ok: false,
          status: 400,
          statusText: 'Failure'
        }))

        await wrapper.instance().getTourDates()

        expect(wrapper.state().error).toEqual('400 Failure')
      })

      it('should setState of error if an unhandled server error occurs', async () => {
        window.fetch = jest.fn().mockImplementation(() => {
          throw Error('Ahhh!')
        })

        await wrapper.instance().getTourDates()

        expect(wrapper.state().error).toEqual(Error('Ahhh!'))
      })

      it('should setState of photos if response is ok', async () => {
        window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
          ok: true,
          json: () => []
        }))

        await wrapper.instance().getTourDates()

        expect(wrapper.state().tourDates).toEqual([])
        expect(setTourDates).toBeCalledWith([])
      })
    })

    describe('getDatesRender', () => {
      it('should return the correct JSX for the tour dates in state', () => {
        wrapper.instance().componentDidMount()

        const dates = wrapper.instance().getDatesRender()

        expect(typeof dates).toEqual('object')
      })
    })

    describe('dateHelper', () => {
      it('should return a correctly formatted date string for sorting', () => {
        const date = '12/23'

        const result = wrapper.instance().dateHelper(date)

        expect(result).toEqual('1223')
      })
    })
  })
})