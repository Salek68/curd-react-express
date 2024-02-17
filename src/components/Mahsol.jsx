import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Mahsol = () => {
    const [ users , setUsers] = useState([]);
    useEffect(() =>{
        allmahsol()
    },[])
    const [iduser,setiduser] = useState([]);
        const allmahsol = async()=> {
            await axios.get("http://localhost:5000/mahsolat")
            .then(res => {
             setUsers(res.data);
            
            }).catch(err => {
                console.log(err);
            })
        }
    return (
<div>
  
    <Link to={`/edit/${users._id}`} className="button is-danger is-small linka">مشاهده بیشتر</Link>
        <div className="divmahsol">

            {
               users.map((users,index)=>{
                if(index+1 < 5){
                    return(
                 
                 

   <div class="container1">
 
    <div class="card" key={users._id}>
      {/* <img src="https://example.com/image.jpg" class="card-img-top" alt="Product image"> */}
      <div class="card-body" key={index+1}>
        <h5 class="card-title">{users.mahsolname}</h5>
        <p class="card-text">{users.moshakhasat}</p>
        <div class="card-price">
          <span class="card-price-amount">قیمت  : <b>{users.gheymat}</b></span>
          <br/>
          مشخصات 
          <br></br>
          <span class="card-price-currency">{users.tozihat}</span>
        </div>
      </div>
      <div class="card-footer">
      <Link to={`/edit/${users._id}`} className="button is-danger is-small linka">خرید</Link>
      </div>
      
    </div>
 
  </div>
      
                )
                }
                else{
                  return(
                 
                 
                
                    <div class="container1 hiden">
                  
                     <div class="card" key={users._id}>
                       {/* <img src="https://example.com/image.jpg" class="card-img-top" alt="Product image"> */}
                       <div class="card-body" key={index+1}>
                         <h5 class="card-title">{users.mahsolname}</h5>
                         <p class="card-text">{users.moshakhasat}</p>
                         <div class="card-price">
                           <span class="card-price-amount">قیمت  : <b>{users.gheymat}</b></span>
                           <br/>
                           مشخصات 
                           <br></br>
                           <span class="card-price-currency">{users.tozihat}</span>
                         </div>
                       </div>
                       <div class="card-footer">
                       <Link to={`/edit/${users._id}`} className="button is-danger is-small linka">خرید</Link>
                       </div>
                       
                     </div>
                  
                   </div>
               
                                 )
                }
              
            })  
            }
           
         
         
      </div>
      </div>
    );
}

export default Mahsol;
