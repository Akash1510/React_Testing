import {render,screen} from '@testing-library/react'
import  CustomRole from '../../RTL Query/CustomRole';

test('Checking of the CustomRole', () => { 
    render(<CustomRole/>)
const btn = screen.getByRole('button' ,{name:"Click 1"})
const btn2 = screen.getByRole('button',{name:"Click 2"})

const inputField = screen.getByRole('textbox',{name:"User Name"})
const inputField2 = screen.getByRole('textbox',{name:"User Age"})

const div = screen.getByRole('div');
expect(btn).toBeInTheDocument();
expect(btn2).toBeInTheDocument();
expect(inputField).toBeInTheDocument()
expect(inputField2).toBeInTheDocument();
expect(div).toBeInTheDocument()

 })