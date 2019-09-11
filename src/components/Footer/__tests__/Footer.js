import React from 'react'
import { shallow } from 'enzyme'
import Footer from '../Footer'

jest.useFakeTimers()

describe('Footer', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(<Footer />)
  })

  it('should match the default snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('should match the snapshot when errored', () => {
    wrapper.setState({ error: true })

    expect(wrapper).toMatchSnapshot()
  })

  it('should match the snapshot upon success', () => {
    wrapper.setState({ success: true })

    expect(wrapper).toMatchSnapshot()
  })

  it('should have the correct default state', () => {
    const expected = {
      email: '',
      error: false,
      success: false
    }

    expect(wrapper.state()).toEqual(expected)
  })

  it('should update email in state when updateEmail is called', () => {
    wrapper.instance().updateEmail({
      target: { value: 'email!' }
    })

    expect(wrapper.state().email).toEqual('email!')
  })

  it('handleSubmit - should setState of error to true if response is not ok', async () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: false
    }))
    
    await wrapper.instance().handleSubmit()

    expect(wrapper.state().error).toEqual(true)
  })

  it('handleSubmit - should setState of success to true and clear email if response is ok', async () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: true
    }))

    const expected = {
      error: false,
      success: true,
      email: ''
    }

    await wrapper.instance().handleSubmit()

    expect(wrapper.state()).toEqual(expected)
  })

  it('handleSubmit - should setState of success back to false after 4000ms', async () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: true
    }))

    await wrapper.instance().handleSubmit()

    jest.runAllTimers()

    expect(wrapper.state().success).toEqual(false)
  })
})