import React from 'react'
import { shallow } from 'enzyme'
import AboutContainer from '../AboutContainer'

describe('AboutConatiner', () => {
  it('should match the snapshot', () => {
    const wrapper = shallow(<AboutContainer name="Sabetta" />)

    expect(wrapper).toMatchSnapshot()
  })
})