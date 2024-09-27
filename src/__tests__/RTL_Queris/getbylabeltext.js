import {render,screen} from '@testing-library/react'
import GetByLabelText from '../../RTL Query/GetByLabelText'

test('Checking the GetByLabelText test case 1', () => {
    render(<GetByLabelText/>)
        // this is for the input box with label
    const inputfield = screen.getByLabelText('Name')
    expect(inputfield).toBeInTheDocument()

    // input box woth checkbox using
    const checkBox = screen.getByLabelText("Skills")
    expect(checkBox).toBeInTheDocument()
    expect(checkBox).toHaveValue(true)
    // expect(checkBox).toBeChecked(true);

 })