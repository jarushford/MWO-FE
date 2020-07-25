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
})