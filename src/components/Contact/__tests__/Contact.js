import React from 'react'
import { shallow } from 'enzyme'
import Contact from '../Contact'

describe('Contact', () => {
  it('should match the snapshot', () => {
    const wrapper = shallow(<Contact />)

    expect(wrapper).toMatchSnapshot()
  })
})