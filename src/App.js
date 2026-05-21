import React, { useState } from 'react';
import Child from './child';

function App() {
  const [ dataFromChild, setDataFromChild] = useState(null);
  
  const handleDataFromChild = (data) => {
    setDataFromChild(data);
}

  return(
      <div>
            <Child onDataFromChild = {handleDataFromChild} />
            <p> Data from child component : {dataFromChild} </p>
    </div>
    );
}

export default App;