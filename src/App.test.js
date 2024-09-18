import { render, screen } from '@testing-library/react'

import App from './App'

// New test function for the React Component
// 1 > test case for the text checking on the screen


test('Check the Text', () => {
  render(<App />)
  const textElement = screen.getByText(/Hey I Am Akash/i)
  expect(textElement).toBeInTheDocument();
})

test('Now for the test 2',
  () => {
    render(<App />)
    const text = screen.getByText(/Not to Anything/i)
    expect(text).toBeInTheDocument()
  }
)

test("to Check the Leaf Title"
  , () => {
    render(<App />)
    const title = screen.getByTitle(/this is leaf/i)
    expect(title).toBeInTheDocument()
  }
)


//  Now to test the Input Box id , placeholder , name , value ,type


// to test the input box

test("Testing of the InputBox",
  () => {
    render(<App />)
    const CheckInputBox = screen.getByRole("textbox")
    expect(CheckInputBox).toBeInTheDocument()

  }
)

// to check or test the placeholder

test("check that placeholder is present or not", () => {
  render(<App />)

  const textplaceholder = screen.getByPlaceholderText(/Enter your Name/i)
  expect(textplaceholder).toBeInTheDocument()

})

// to check the name attribute

test("Check the Attributes in the testbox",()=>{
  render(<App />)

  const nameplace = screen.getByRole(/textbox/)
  expect(nameplace).toHaveAttribute("name","Doctor")
  // check for the id is present or not
  expect(nameplace).toHaveAttribute("id","name")
  expect(nameplace).toHaveAttribute('class','local')
})