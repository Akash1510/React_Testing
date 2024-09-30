import { render,screen } from "@testing-library/react";
import QueryByText from "../../QueryBY/QueryByText";

// Query are the Work for the Hidden logic of the UI
test('Work with the Queries', () => { 
    render(<QueryByText/>)
    const Query =  screen.queryByText('logout',{exact:false})
    expect(Query).toBeInTheDocument();
 })