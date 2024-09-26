import { render } from "@testing-library/react";
import App from "../App";

test('Checking of the Snapshots', () => { 
    
   const view = render(<App/>)
   expect(view).toMatchSnapshot();
 })

//   If make changes in the App.js files at last of the Production 
// then the snapshots use 
// snapshots detect the Pyq code and Recent code its does not pass
// if you want to update then you can using the U 
// otherwiese not
