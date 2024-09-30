import { render, screen } from "@testing-library/react";
import FindByText from "../../FindBy/FindByText";

test('Checking with the FindByText', async () => {
    render(<FindByText />);

    const find = await screen.findByText(/Data Found/i);
    expect(find).toBeInTheDocument();
});
