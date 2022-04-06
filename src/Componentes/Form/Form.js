import React, {useState} from 'react';

const Form= (props) =>{
    const {setBox} =props
    const [colorTamaño, setColorTamaño]= useState({
        color: "",
        tamaño: 0
    });
    
    const onChange=(e)=>{
        setColorTamaño({
            ...colorTamaño,
            [e.target.name]: e.target.value
        })

    }
    const handleSubmit = (e) => {
        e.preventDefault();
        setBox((prev) => [...prev, colorTamaño]);
        setColorTamaño({
            color:"",
            tamaño: 0
        });
    }
    
    return (
        <form onSubmit={ handleSubmit }>
            <div className='row'>
                <label>Color</label>
                <input type="text" name="color" id="color" onChange={onChange} value={colorTamaño.color}/>
                <label>Tamaño:</label>
                <input type="number" name="tamaño" id="tamaño" onChange={onChange} value={colorTamaño.tamaño}/>
                <button type='submit'>Add</button>
            </div>
        </form>
    );
};


export default Form;
