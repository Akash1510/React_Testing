import React from 'react'

const GetByLabelText = () => {
  return (
    <div>
        <h1>RTL Query : GetByLabelText</h1>
       <label htmlFor="user">Name</label> 
       <input type="text"  id="user" defaultValue={"Ok"}/>    

       <label htmlFor="skills">Skills</label>
       <input type="text"  id="skills" defaultChecked={true} />
    </div>
  )
}

export default GetByLabelText