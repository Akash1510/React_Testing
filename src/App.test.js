import {render,screen } from '@testing-library/react'

import App from './App'

// New test function for the React Component
// 1 > test case for the text checking on the screen


test('Check the Text', () => { 
  render(<App/>)
  const textElement = screen.getByText(/Hey I Am Akash/i)
  expect(textElement).toBeInTheDocument();
 })

 test('Now for the test 2',
  ()=>{
    render(<App/>)
    const text = screen.getByText(/Not to Anything/i)
    expect(text).toBeInTheDocument()
    }
 )

 test("to Check the Leaf Title" 
  ,()=>{
    render(<App/>)
    const title = screen.getByTitle(/this is leaf/i)
    expect(title).toBeInTheDocument()
  }
 )