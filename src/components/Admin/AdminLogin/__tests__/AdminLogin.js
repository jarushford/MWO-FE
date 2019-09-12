import React from 'react'
import AdminLogin from '../AdminLogin'
import { shallow } from 'enzyme'
import { render, fireEvent, getByTestId } from "react-testing-library"

describe('AdminLogin', () => {
  it.skip('should match the snapshot', () => {
    const wrapper = shallow(<AdminLogin />)
    expect(wrapper).toMatchSnapshot()
  })

  it.skip('should match the snapshot logged in', () => {
    const { container } = render(<AdminLogin />)
    const emailValue = getByTestId(container, 'email')
    const passwordValue = getByTestId(container, 'password')
    expect(emailValue.value).toBe('')
    expect(passwordValue.value).toBe('')
  })

  it.skip('should update email on change', () => {
    const e = { target: { value: 'Test' } }
    const { container } = render(<AdminLogin />)
    const emailValue = getByTestId(container, 'email')
    fireEvent.change(emailValue, e)
    expect(emailValue.value).toBe('Test')
  })

  it.skip('should update password on change', () => {
    const e = { target: { value: 'Test' } }
    const { container } = render(<AdminLogin />)
    const passwordValue = getByTestId(container, 'password')
    fireEvent.change(passwordValue, e)
    expect(passwordValue.value).toBe('Test')
  })
})