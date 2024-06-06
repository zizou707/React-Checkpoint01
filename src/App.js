
import './App.css';
import Name from './Name';
import Price from './price';
import Image from './image';
import Description from './description';
import React, { useRef, useState } from 'react';
import img from './apple-watch-ultra-2-49mm-boitier-en-titane-et-bracelet-orange-ocean_1.jpg'
import pic from './Toni_Kroos_-_CdR_-_RM_v_ATL_(cropped).jpg.webp'
import Card from 'react-bootstrap/Card';

function App() {
var [myName,setMyName]=useState("there!");
var picUrl=useRef();

function changeName(e){
  
  if (e.target.value === "") {setMyName('there!')} else {
    setMyName(e.target.value);
  }
}
function displayImage(){
 if (myName ==="there!"){picUrl.current.src=""}
  picUrl.current.src =pic
}

  return (
    <div className='container'>
      <Card style={{ width: '18rem' }}>
        <img alt='product-image' src={img}></img>
        <Card.Body>
          <Card.Title><Name/></Card.Title>
          <Card.Text>
            <Description/>
            <Price/>
          </Card.Text>
          
        </Card.Body>
      </Card>
    
       <section id='myName'>
            
            <p>Hello, {myName}</p> 
            <input type='text' placeholder='Enter your Name' onChange={e=>changeName(e)} ></input> 
            <button type='submit' onClick={displayImage} >Submit</button>
            <img alt="profile" ref={picUrl} ></img>
            
        </section>
    
   </div> 
  );
}

export default App;
