
import { Base64 } from "js-base64";
import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import Cookies from 'js-cookie';
const Menutop = () => {
    const [ menu , setmenu] = useState([]);
    const [ menua , setmenua] = useState([]);
    const [ t , sett] = useState([]);
    
   useEffect(()=>{
menuf();
menuasli();
   },[])
   const loginoront = async(req,res)=>{
    const data = {username: "DWD",pass:"12gsdvs345"}
    var temp = Base64.encode(data);
var t = Base64.decode(temp);
    alert(temp);
    alert(t);
     if(Cookies.get('rejacwt')) {
      console.log(Cookies.get('rejacwt'))
     }
      else{
        Cookies.set('rejacwt', 'vcashvahsdcbhasb', { expires: 7 });
        console.log(Cookies.get('rejacwt'))
      }
   

                }
    const menuf = async()=>{
        await axios.get("http://localhost:5000/topmenu")
        .then(res => {
            setmenu(res.data);
       const data = res.data;
            if (typeof data !== "object") {
                // If not an object, assume it's a single value
                console.log(`Number of data: ${data}`);
              } else {
                sett(data.length);
              }
        })}
        const menuasli = async()=>{
            await axios.get("http://localhost:5000/menuasli")
            .then(res => {
                setmenua(res.data);
           const data = res.data;
                if (typeof data !== "object") {
                    // If not an object, assume it's a single value
                    console.log(`Number of data: ${data}`);
                  } else {
                    sett(data.length);
                  }
            })
        
    }
    return (
        <div>
        <div className='divtoper'>
            
 
                <div className='divtleft'>
      
           <button className="button h5" onClick={loginoront}>ورود / عضویت</button>    </div>
        <div className='divtmain'>
          <img className="rounded" src={require('./image/Name.com_logo.svg.png')} width={300} height={50}></img>
        </div>
    
        <div className='divtright'>
            {
                menu.map((menu,index) => {
                   
              if(index+1 !== t){
                if(menu.img!=undefined){
                    return(
                        
                        <span className="nav-item active" key={index}> {menu.name}<img src={require('./image/'+menu.img)} alt='ahauh'/>  </span>

                    )
                  }
                  else{
                        return(
                        
                      
                    <span key={index}> {menu.name}  </span>
                    )
                  }
            
              }
             
              else{
                
                if(menu.img!=undefined){
                    return(
                        
                        <span key={index}> {menu.name}<img src={require('./image/'+menu.img)} alt='ahauh'/>  </span>

                    )
                  }
                  else{
                        return(
                        
                      
                    <span key={index}> {menu.name}  </span>
                    )
                  }                        
              }
                    
                   
                  
                    

                    
                })
            }
            
            
         </div>
         
    </div>
    <div className="menu">
    <nav class="navbar navbar-expand-lg navbar-red navbar-dark">
        <div class="wrapper">
          
        </div>
  <div class="container-fluid all-show">
    <a class="navbar-brand" href="#"> site name <i class="fa fa-codepen"></i></a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto mb-2 mb-lg-0">
        {
menua.map((menua,index)=>{
    return(
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">{menua.name}</a>
        </li>
    )
})
        }
        
        
        
        
      </ul>
      <div class="d-flex flex-column sim">

      <button  type="button" class="button btn-primary h5 bac">
  سبد خرید 
  <span class="badge badge-light ta">9</span>

</button>
        
      </div>
    </div>
  </div>
</nav>
   </div>
    </div>
    );
}

export default Menutop;
