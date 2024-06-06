
import React, { useState } from "react";
import product from "./product";
 
function Price() {

     const [qty,setQty]=useState(1);
     
     const addQty =()=>{
        setQty(q=>q +1)  
     }

     const subQty =()=>{
       if (qty > 1) setQty(q=>q -1) 
     }

    return(
        <>
         
        <h1 style={h1}>Price : £ {product.price}</h1>
        <div style={CardBody} id='Card-body'>
            <h5 style={h5} >Total Price : £ {product.price*qty}</h5> 
            <button  className='Btn'  onClick={addQty}>+</button>
            <h2 style={styles}  id="Qty" >{qty}</h2>
            <button  className='Btn' onClick={subQty}>-</button>
        </div>
        </>
    );
}

//styling
const styles={
    width:"50px",
   textAlign:"center",
  marginTop:"7px"}
const CardBody={
 paddingLeft:"60px" ,  
display:"grid",
gridTemplateColumns:"50px 50px 50px",
textAlign: "center"
}
const h5={
gridColumn:"span 3",
paddingLeft:"25px",
display:"flex"
}
const h1={
    paddingLeft:"65px"
}

export default Price