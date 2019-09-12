import React from 'react'
import { shallow } from 'enzyme'
import PressKit from '../PressKit'

describe('PressKit', () => {
  it('should match the snapshot', () => {
    const wrapper = shallow(<PressKit />)

    expect(wrapper).toMatchSnapshot()
  })
})