// Use of the hooks 
import { render, screen} from "@testing-library/react";
import App from "../App";


//  BeforeAll hook ->this hook fires one time before execution of the test cases

// beforeAll(() => {
//     console.log("*********Function is Running that is Before all******")
// })

// Now use the BeforeEach Hook ->Excution Depends on the No of Testcases that time it excutes
beforeEach(()=>{
    console.log("___________Before Each Is Excuted __________")
})

test('Check this test case', () => {
    render(<App />)
    const text = screen.getByText(/Hey I Am Akash/i)
    expect(text).toBeInTheDocument()
})
test('Check this test case 2', () => {
    render(<App />)
    const text = screen.getByText(/Not to Anything/i)
    expect(text).toBeInTheDocument()
})
test('Check this test case 3', () => {
    render(<App />)
    const text = screen.getByText(/This is Your Name/i)
    expect(text).toBeInTheDocument()
})
test('Check this test case 4', () => {
    render(<App />)
    const text = screen.getByText(/Hey I Am Akash/i)
    expect(text).toBeInTheDocument()
})



