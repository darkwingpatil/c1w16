import React from "react";
// keep the add to cart component here
const CartButton = () => {
    //manage state of the count 
    let[count,setcount]=React.useState(0)

    const incre=()=>{
      setcount(count+1)
    }
    const decre=()=>{
      if(count<=0)
      {
        return 
      }
      else{
        setcount(count-1)
      }
      
    }
  return <>
  {/* add to cart button */}
  {/* count with - and  + button */}
{/* 
  {(!value)?<p>Add to cart</p>:<p>{value}</p>}
                              {(!value)?<button onClick={decre} style={{display:"none"}}></button>:<button onClick={()=>decre(ele.title)}>-</button>}
                              <button onClick={()=>incre(ele.title)}>+</button>
  <div> */}
  <div>
      {(!count)?<button onClick={decre} style={{display:"none"}}>-</button>:<button onClick={decre}>-</button>}
      {(!count)?<p className="count-item">Add to cart</p>:<p className="count-item">{count}</p>}
      <button onClick={incre}>+</button>
  </div>
  </>;
};
export default CartButton
