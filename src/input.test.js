import Input from "./input";


import { fireEvent, render,screen } from "@testing-library/react";


test('Onchange Event Checking', () => { 
    render(<Input/>)
    let InputData = screen.getByRole(/textbox/i)
    fireEvent.change(InputData,{target : {value:'hello'}})
    expect(InputData.value).toBe('hello')
}
)
