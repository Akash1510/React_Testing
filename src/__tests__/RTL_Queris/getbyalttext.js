import { render ,screen} from "@testing-library/react";
import GetByAltText from "../../RTL Query/GetByAltText";


test("Checking of the GetByaltText Functinality",()=>{
    render(<GetByAltText/>)
    const altimage  = screen.getAllByAltText('Any')
    expect(altimage).toBeInTheDocument();
})
