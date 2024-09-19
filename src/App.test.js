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

test("Check the Attributes in the testbox", () => {
  render(<App />)

  const nameplace = screen.getByRole(/textbox/)
  expect(nameplace).toHaveAttribute("name", "Doctor")
  // check for the id is present or not
  expect(nameplace).toHaveAttribute("id", "name")
  expect(nameplace).toHaveAttribute('class', 'local')
})

// Now use the Describe function

describe("UI Component testing",
()=>{
  test("Case 1 for the component",()=>{
    render(<App />)
    const CheckInputBox = screen.getByRole(/textbox/i)
    expect(CheckInputBox).toBeInTheDocument()
  })

  test("Case 2 For the Component",()=>{
    render(<App/>)
    const nameplace = screen.getByRole(/textbox/i)
    expect(nameplace).toHaveAttribute('name','Doctor')
  })

})

describe("Api testing test cases",()=>{
  test("CASE 1 FOR THE API TEST CASE1",()=>{
    render(<App/>)
      const fieldId = screen.getByRole(/textbox/i)
      expect(fieldId).toHaveAttribute('id','name')
  })
  test('case 2 for api testing',()=>{
    render(<App/>)
    const placeholder = screen.getByPlaceholderText(/Enter your Name/i)
    expect(placeholder).toBeInTheDocument()
  })
})


// Now use the .only function -> that only one test case is excuted

describe.only("Comonent Checking",()=>{
  test("Check Input Field",()=>{
    render(<App/>)
    const inputfied = screen.getByRole('textbox')
    expect(inputfied).toBeInTheDocument();

  })
})