import { fireEvent, render, screen } from "@testing-library/react";
import Func from "../Func";

test('this is Function based Component Method Testing', () => {
//    steps in UI testing

    render(<Func />);     // render the element
    const btn = screen.getByRole("button")          // get or find the element 
    fireEvent.click(btn);
    expect(screen.getByText("this is Function Component Method")).toBeInTheDocument();  // Assertions
})