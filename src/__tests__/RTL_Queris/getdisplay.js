import {render,screen} from '@testing-library/react'
import GetByDisplay from '../../RTL Query/GetByDisplay'
// test ("Working with the Display Values",()=>{
//     render(<GetByDisplay/>)
//     const input = screen.getByDisplayValue('Akash')
//     expect(input).toBeInTheDocument()
// })



// Now Working with the Multiple GetAllByDisplayvalue()

test("Working with the Multiple Display Values",()=>{
    render(<GetByDisplay/>)
    const inputMul = screen.getAllByDisplayValue("Akash")
    for (let i = 0;i<inputMul.length;i++){
        expect(inputMul[i]).toBeInTheDocument();
    }
})