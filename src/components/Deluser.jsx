import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
const Deluser = () => {
    const navegate = useNavigate();
    const {id} = useParams();
    console.log(id)
        const delusers = async(e)=>{
        try{
            await axios.delete("http://localhost:5000/users/"+id)
            
            navegate("/",alert("با موفقیت حذف شد"));
        }catch(er){
            console.log(er)
        }
    }
    useEffect(()=>{
    delusers();
    },[])
    return (
        <div>
            
        </div>
    );
}

export default Deluser;
