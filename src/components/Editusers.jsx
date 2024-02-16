import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const Editusers = () => {
    const {id} = useParams();
    const [name,setname] = useState("");
    const [email,setemail] = useState("");
    const [gender,setgender] = useState("female");
    const [ users , setUsers] = useState([]);
    const navegate = useNavigate();
    const handeluser = async()=> {
        await axios.get("http://localhost:5000/users/"+id)
        .then(res => {
        setUsers(res.data);
        
        }).catch(err => {
            console.log(err);
        })
    }
    useEffect(()=>{
        handeluser();
    },[])
    
    const updateuser = async()=>{
        try {
           await axios.patch("http://localhost:5000/users/"+id,{name,email,gender})
           alert("up")
         window.location.replace("http://localhost:3000/")
        // navegate("/")
        } catch (error) {
            alert(error)
        }
        
    }
    return (
        <div className='columns'>
         <div className="columns is-half">
            <form onSubmit={updateuser}>
                <div className="field">
                    <label className='label'>نام</label>
                    <div className="control">
                        <input type="text" name='name' className="input" placeholder={users.name}  onChange={e => setname(e.target.value)} required/>
                    </div>
                </div>

                <div className="field">
                    <label className='label'>ایمیل</label>
                    <div className="control">
                        <input type="text"  name='email' className="input" placeholder={users.email} onChange={e => setemail(e.target.value)} required/>
                    </div>
                </div>

                <div className="field">
                    <label className='label'>جنسیت</label>
                    <div className="control">
                      <div className="select is-fullwidth">
                        <select  name='gender' onChange={e => setgender(e.target.value)}>
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

export default Editusers;
