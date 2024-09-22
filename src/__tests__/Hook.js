// Use of the hooks 
import { render, screen} from "@testing-library/react";
import App from "../App";


//  BeforeAll hook ->this hook fires one time before execution of the test cases

beforeAll(() => {
    console.log("*********Function is Running that is Before all******")
})

test('Check this test case', () => {
    render(<App />)
    const text = screen.getByText(/Hey I Am Akash/i)
    expect(text).toBeInTheDocument()
})

