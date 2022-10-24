
import './App.css';
import { useState } from 'react';

function App() {

  const [Firstname, fSet] = useState('');
  const [Lastname, lSet] = useState('');
  
  const Namey = y => {
    fSet(y.target.value);
  }

  const Namex = x => {
    lSet(x.target.value);
  }
 
  return (<div>

<input type="text" value={Firstname} placeholder='Firstname' onChange={Namey}></input><br/><br/>
<input type="text" value={Lastname} placeholder='Lastname' onChange={Namex}></input><br/><br/>




FirstName: {Firstname}<br/><br/>
LastName: {Lastname}<br/><br/>




  </div>)
  
    
    

}

export default App;
