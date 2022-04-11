import React from "react"
import data from '../data.json'
import GroceryItem from "./GroceryItem"
import { nanoid } from 'nanoid'
import "../App.css"
import CartButton from "./CartButton"


const GroceryDetails = ()=>{
console.log(data)
    return(
        <>
        <h1>Groceries</h1>
        <div className="container">
            {/* map through the data and display the cards */
              data.map((ele)=>(
                  <div className="container" key={nanoid()}>
                      <div style={{width:"300px",border:"1px solid silver"}} className="shadow">
                          <img src={ele.imgURL}/>
                          <p>{ele.title}</p>
                          <div style={{display:"flex",justifyContent:"space-around"}}>
                              <p>{ele.sellingPrice}</p>
                              <p className="striked">{ele.mrp}</p>
                          </div>
                          <div style={{display:"flex",justifyContent:"space-around",background:"blue",color:"white"}}>
                              <CartButton/>
                          </div>
                      </div>
                  </div>
              ))
            }
        </div>
        </>
    )
}
export default GroceryDetails