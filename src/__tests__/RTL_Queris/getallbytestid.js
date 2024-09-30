import {configure, render,screen} from '@testing-library/react'
import GetTestId from '../../RTL Query/GetTestId'

configure({testIdAttribute:'id'})
// test('Checking the Test id', () => { 
//     render(<GetTestId/>)
//     const divId = screen.getByTestId("div-test-id")
//     expect(divId).toBeInTheDocument();


//  })

//  test case for the getAllByTestId

// test("Case for the getAllByTestId", () => {
//     render(<GetTestId />);
    
//     const divIds = screen.getAllByTestId('div-test-id');
    
//     divIds.forEach(divId => {
//         expect(divId).toBeInTheDocument();
//     });
// });

// Any of the onetest case only runs


// Working with the configure id
test("Working with overriding the id",()=>{
      render(<GetTestId/>)
      const div = screen.getByTestId('local')
      expect(div).toBeInTheDocument();
})