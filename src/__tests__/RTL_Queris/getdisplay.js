import {render,screen} from '@testing-library/react'
import GetByDisplay from '../../RTL Query/GetByDisplay'
test ("Working with the Display Values",()=>{
    render(<GetByDisplay/>)
    const input = screen.getByDisplayValue('Akash')
    expect(input).toBeInTheDocument()
})