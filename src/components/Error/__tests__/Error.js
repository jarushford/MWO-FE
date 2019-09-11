import React from 'react'
import { shallow } from 'enzyme'
import ErrorPage from '../Error'

describe('Error', () => {
  it('should match the snapshot', () => {
    const wrapper = shallow(<ErrorPage message="ReferenceError..." />)

    expect(wrapper).toMatchSnapshot()
  })
})