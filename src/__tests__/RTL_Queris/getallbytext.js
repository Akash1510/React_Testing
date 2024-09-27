
import {render,screen} from '@testing-library/react'
import GetAllByText from '../../RTL Query/GetAllByText'

test('This is GetAllBytest checking', () => { 
    render(<GetAllByText/>)
    const h1tag = screen.getAllByText("Hey I am Akash")
    for (let i=0;i<h1tag.length;i++){
        expect(h1tag[i]).toBeInTheDocument()
    }

    const ptag = screen.getByText("This Is")
    expect(ptag).toBeInTheDocument();
 })