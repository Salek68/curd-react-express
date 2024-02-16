import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Adduser = () => {
    const [name,setname] = useState("");
    const [email,setemail] = useState("");
    const [gender,setgender] = useState("female");
    const navegate = useNavigate();
    const saveuser = async(e)=>{
   e.preventDefault();
   try{
 const res =await axios.post("http://localhost:5000/users",{name,email,gender})
    navegate("/");
   }catch(er){
    console.log(er)
   }
//    console.log(name , email ,gender)
    }
    return (
        <div className='columns'>
         <div className="columns is-half">
            <form onSubmit={saveuser}>
                <div className="field">
                    <label className='label'>نام</label>
                    <div className="control">
                        <input type="text" name='name' className="input" placeholder='نام'  onChange={e => setname(e.target.value)} required/>
                    </div>
                </div>

                <div className="field">
                    <label className='label'>ایمیل</label>
                    <div className="control">
                        <input type="text" name='email' className="input" placeholder='ایمیل' onChange={e => setemail(e.target.value)} required/>
                    </div>
                </div>

                <div className="field">
                    <label className='label'>جنسیت</label>
                    <div className="control">
                      <div className="select is-fullwidth">
                        <select name='gender' onChange={e => setgender(e.target.value)}>
                            <option value="female">زن</option>
                            <option value="male">مرد</option>
                        </select>
                      </div>
                    </div>
                </div>
                <div className="field">
                
                    <div className="control">
                       <button type='submit' className='button is-success'>ارسال</button>
                    </div>
                </div>
            </form>
            </div>   
        </div>
    );
}

export default Adduser;
