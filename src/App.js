
import { useState } from 'react';
import './App.css';


function App() {
  const [name,setname] = useState("");
  const Givename = ()=>{
    setname("Rahul");
  }
  return (
    <div className="App">
      <p>Hey I Am Akash</p>
      <p>Not to Anything</p>
      <input type='text' placeholder='Enter your Name' name='Doctor' id='name' className='local' />
      <br />
      <br />
      <br />
      <img title='this is leaf' src='https://th.bing.com/th/id/OIP.MPP1fw6m0Gy1xNGZF2ioIAHaFG?rs=1&pid=ImgDetMain' alt='prompt.jpg' />
      <h1>This is Your Name</h1>
      <button onClick={Givename} >what is Name</button>
      <p>{name}</p>
     
       
    </div>
  );
}

export default App;
