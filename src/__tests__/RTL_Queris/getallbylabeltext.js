import {render,screen} from '@testing-library/react'
import GetAllByLabelText from '../../RTL Query/GetAllByLabelText'



test('Checking of the GetAllByText Query', () => { 
    render(<GetAllByLabelText/>)
     const inputCheck = screen.getAllByLabelText("User")
     for(let i = 0;i<inputCheck.length;i++){
        expect(inputCheck[i]).toBeInTheDocument()
        expect(inputCheck[i]).toHaveValue("Ram")
     }
 })

//  Now Test case for the GetAllByLabelText for check box
test("testing the checkboxes", () => {
    render(<GetAllByLabelText />);
    const checkBox = screen.getAllByLabelText("Skills");
    for (let i = 0; i < checkBox.length; i++) {
        expect(checkBox[i]).toBeInTheDocument();
        expect(checkBox[i]).toBeEnabled();
       
        expect(checkBox[i].checked).toBeFalsy(); }
    }
);
