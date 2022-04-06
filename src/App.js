import './App.css';
import Form from './Componentes/Form/Form';
import React, {useState} from 'react';


function App() {

  const [box,setBox] =useState( []);

  return (
    <div className="App">
      <Form setBox={setBox}/>
      <div className='flex-container'>
        {
          box.length>0 ? 
          box.map((box,index) => (<div key={index}
            className="box" style={{backgroundColor:box.color,
            height:box.tamaño+"px", width: box.tamaño+"px"}}></div>)):""
        }
      </div>
    </div>
  );
}

export default App;
