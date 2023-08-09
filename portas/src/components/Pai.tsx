import React, { SetStateAction } from 'react'
import { useState } from 'react';
import Child from './Filho';

function Parent() {
  const [data, setData] = useState('');

  const [data2, setData2] = useState('');
  
  const childToParent = (childdata) => {
    setData(childdata);
  }

  const parentToChild = () => {
    setData2("Estes são os dados que vão do componente pai para o componente filho.");
  }

  return (
    <div >
     {data}
      <div>
        <Child childToParent={childToParent} parentToChild={data2}/>
      </div>
 
      <div>
        <button onClick={() => parentToChild()}>Clique no pai</button>
      </div>
    </div>
  );
}

export default Parent;