import { useState } from "react"
import './RestaurantMenu.css';

export default function RestaurantMenu() {
  const [data, setData] = useState()

  const fetchApi= async()=>{
     
    const response=await fetch(`https://fakestoreapi.com/products`);
    // console.log(response)
    const resJson= await response.json();
    // console.log(resJson)
    setData(resJson)
    // console.log(data)
  }
  fetchApi()
  return (

  <> 
  <div style={{display:"flex",justifyContent:"space-evenly",flexDirection:"column"}}> 

    <div className="App">
      {data?.map((obj)=>(

         <div className="div1" >
         <div> <img style={{width:"50px",height:"50px"}} src={obj.image}></img></div>
         <div> Title:<p>{obj.title}</p></div>
         <div> Description:<p>{obj.description}</p>            </div>
         </div>
 
      ))}
       
       
    </div>
    </div>
    </>
  );
  }

