import React from 'react'
import { shallow } from 'enzyme'
import MainNav from '../MainNav'

describe('MainNav', () => {
  it('should match the snapshot', () => {
    const wrapper = shallow(<MainNav />)

    expect(wrapper).toMatchSnapshot()
  })
})