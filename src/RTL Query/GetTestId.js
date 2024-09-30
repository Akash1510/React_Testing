import React from 'react'

const GetTestId = () => {
    return (
        <div>

            <h1>RTL query : getBytestId and getAllByTestId</h1>
            <div data-testid="div-test-id">Test Content</div>;
            <div data-testid="div-test-id">Test Content1</div>;
            <div data-testid="div-test-id">Test Content2</div>;
            <div data-testid="div-test-id">Test Content3</div>;
            <div data-testid="div-test-id">Test Content4</div>;
            <div id ='local'>Hi My Brother</div>
            <h2>
                h2 tag
            </h2>
        </div>
    )
}

export default GetTestId