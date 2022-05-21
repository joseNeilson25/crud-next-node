import React, {useState, useEffect } from 'react';
import Axios from "axios"

export default function Home() {

  const [values, setValues] = useState();
  const [listCategory, setListCategory] = useState();

  const handleChangeValues = (value) =>{
    setValues(prevValue=>({
      ...prevValue,
      [value.target.name]: value.target.value,
    }));
};

const handleClickButton = () =>{
  Axios.post("http://localhost:3001/register", {
    name: values.name,
    cost: values.cost,
    category: values.category,
}).then((response) => {
  console.log(response);
})}

useEffect(() =>{
  Axios.get("http://localhost:3001/getCards").then((response) =>{
    setListCategory(response.data);
  })
},[])

  return (
    <div className="app-container">
    <div className="register-container">
      <h1 className="register-title">My Cardinho</h1>
        <input 
          type="text" 
          name="name" 
          placeholder=" Nome" 
          className="register-input"
          onChange={handleChangeValues}/>
      <input 
        type="text" 
        name="cost" 
        placeholder=" Preço" 
        className="register-input"
        onChange={handleChangeValues}/>
      <input 
        type="text" 
        name="category" 
        placeholder=" Categoria" 
        className="register-input"
        onChange={handleChangeValues}/>
    <a href='/list'>
      <button 
        className="register-button" 
        onClick={()=>handleClickButton()}>
          Cadastrar
      </button>
    </a>
    </div>
  </div>
  )
}