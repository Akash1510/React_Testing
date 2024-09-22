// Use of the hooks 
import { render, screen} from "@testing-library/react";
import App from "../App";


//  BeforeAll hook ->this hook fires one time before execution of the test cases

// beforeAll(() => {
//     console.log("*********Function is Running that is Before all******")
// })

// Now use the BeforeEach Hook ->Excution Depends on the No of Testcases that time it excutes
// beforeEach(()=>{
//     console.log("___________Before Each Is Excuted __________")
// })

test('Check this test case', () => {
    render(<App />)
    console.log("testcase 1")
    const text = screen.getByText(/Hey I Am Akash/i)
    expect(text).toBeInTheDocument()
})
test('Check this test case 2', () => {
    render(<App />)
    console.log("testcase 2")
    const text = screen.getByText(/Not to Anything/i)
    expect(text).toBeInTheDocument()
})
test('Check this test case 3', () => {
    render(<App />)
    console.log("testcase 3")
    const text = screen.getByText(/This is Your Name/i)
    expect(text).toBeInTheDocument()
})
test('Check this test case 4', () => {
    render(<App />)
    console.log("testcase 4")
    console.log("Before all four done")
    const text = screen.getByText(/Hey I Am Akash/i)
    expect(text).toBeInTheDocument()
})



// AfterAll Use ->Excution only one time after all test cases run
// afterAll(()=>{
//     console.log("_________Execution of AfterAll_______")
// })

// use the afterEach
afterEach(()=>{
    console.log("_____________Execution is Done After Each testCase_____________")
})
