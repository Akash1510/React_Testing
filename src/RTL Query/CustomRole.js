import React from 'react'

const CustomRole = () => {
    return (
        <div>
            <h1>Custom Role</h1>
            <button>Click 1</button>
            <button>Click 2</button>
            <label htmlFor="input1">User Name</label>
            <input type="text" id='input1' />
            <label htmlFor="input2">User Age</label>
            <input type="text" id='input2' />
            
            {/* Provided Custom Role on  non semantic tag div */}
            <div role='div'>
                Dummy test 
            </div>


        </div>
    )
}

export default CustomRole