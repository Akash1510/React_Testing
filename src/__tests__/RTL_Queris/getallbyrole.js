import {render,screen} from '@testing-library/react'
import GetAllByRole from '../../RTL Query/GetAllByRole'

test('GetAllbyRole testing here', () => {
    render(<GetAllByRole/>)
    const button = screen.getAllByRole('button')
    // get the all elements in the array
    // expect(button).toHaveLength(2) or
    for(let i=0;i<button.length;i++){
        expect(button[i]).toBeInTheDocument();
    }

    // Now use options
    const option = screen.getAllByRole('option')
    for(let i =0;i<option.length;i++){
        expect(option[i]).toBeInTheDocument();
    }
 })