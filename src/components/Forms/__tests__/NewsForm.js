import React from 'react'
import { shallow } from 'enzyme'
import NewsForm from '../NewsForm'

describe('NewsForm', () => {
  let wrapper
  
  beforeEach(() => {
    wrapper = shallow(<NewsForm showForm={true} />)
  })

  it('should match the snapshot when showing', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('should match the snapshot when not showing', () => {
    const wrapper = shallow(<NewsForm showForm={false} />)

    expect(wrapper).toMatchSnapshot()
  })

  it('should have the correct default state', () => {
    const expected = {
      title: '',
      body: '',
      link: ''
    }

    expect(wrapper.state()).toEqual(expected)
  })

  it('updateValue should set the proper value in state', () => {
    const e = { target: { value: 'hi' } }

    wrapper.instance().updateValue(e, 'title')

    expect(wrapper.state().title).toEqual('hi')
  })
})