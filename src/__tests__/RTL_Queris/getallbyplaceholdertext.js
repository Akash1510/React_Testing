import {render,screen} from'@testing-library/react'
import GetAllByPlaceholderText from '../../RTL Query/GetAllByPlaceholderText'

test('Checks with the GeAllByPlaceholder', () => { 
    render(<GetAllByPlaceholderText/>)
    const placeholder  =screen.getAllByPlaceholderText("Enter your Name")
    for(let i=0;i<placeholder.length;i++){
        expect(placeholder[i]).toBeInTheDocument()
    }
 })