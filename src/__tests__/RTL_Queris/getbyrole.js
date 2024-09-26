import { render,screen } from "@testing-library/react";
import GetByRole from "../../RTL Query/GetByRole";

test('GetByRole RTL query Checks', async () => { 
    render(<GetByRole/>)
    const inputField = screen.getByRole("textbox")
    const btn = screen.getByRole('button')
    expect(inputField).toBeInTheDocument()
    expect(inputField).toHaveValue("hello")
    expect(inputField).toBeDisabled();
    expect(btn).toBeInTheDocument()

 })