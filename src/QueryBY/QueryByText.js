import React from 'react'

const QueryByText = () => {
    let login = true;
  return (
    <div>
        
        {
            login ?<button >Logout</button>:<button>Login</button>
        }
        </div>
  )
}

export default QueryByText