import { render,screen } from "@testing-library/react";
import GetByTitle from "../../RTL Query/GetByTitle";

test('Work with the getBy title', () => { 
    render(<GetByTitle/>)
    const title = screen.getByTitle('Done')
    expect(title).toBeInTheDocument()
 })

//  Now work with the GetAllByTitle

test("Work with GetAllByTitle",()=>{
    render(<GetByTitle/>)
    const titles = screen.getAllByTitle(/Local/i)
    for (let i=0;i<titles.length;i++){
        expect(titles[i]).toBeInTheDocument();
    }

})