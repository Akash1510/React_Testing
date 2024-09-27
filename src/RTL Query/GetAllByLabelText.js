import React from 'react'

const GetAllByLabelText = () => {
  return (
    <div>
        <h1>This Is RTL Query : GetAllByLabelText</h1>
<label htmlFor="user">User</label>
<input type="text" id='user1' defaultValue={"Ram"} />

<label htmlFor="user2">User</label>
<input type="text" id='user2' defaultValue={"Ram"} />

<label htmlFor="user3">User</label>
<input type="text" id='user3' defaultValue={"Ram"} />

<label htmlFor="user4">User</label>
<input type="text"id='user4' defaultValue={"Ram"} />

{/* CheckBox */}
<label htmlFor="user">Skills</label>
<input type="checkbox" id='user1' defaultChecked={true} />

<label htmlFor="user2">Skills</label>
<input type="checkbox" id='user2' defaultChecked={true} />

<label htmlFor="user3">Skills</label>
<input type="checkbox" id='user3' defaultChecked={true} />

<label htmlFor="user4">Skills</label>
<input type="checkbox"id='user4' defaultChecked={true} />
 </div>
  )
}

export default GetAllByLabelText