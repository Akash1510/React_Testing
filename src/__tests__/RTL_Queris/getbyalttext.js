import { render ,screen} from "@testing-library/react";
import GetByAltText from "../../RTL Query/GetByAltText";


// test("Checking of the GetByaltText Functinality",()=>{
//     render(<GetByAltText/>)
//     const altimage  = screen.getByAltText('Any')
//         expect(altimage).toBeInTheDocument()
    
// })

// GetAllByAltText -> Working
test("Checking the GetAllByAltText",()=>{
    render(<GetByAltText/>)
   const altImages = screen.getAllByAltText('Any')
   for(let i = 0;i<altImages.length;i++){
    expect(altImages[i]).toBeInTheDocument();
   }
})