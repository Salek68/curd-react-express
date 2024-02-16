import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const Userlist = () => {
const [ users , setUsers] = useState([]);

useEffect(() =>{
    handeluser()
},[])
const [iduser,setiduser] = useState([]);
    const handeluser = async()=> {
        await axios.get("http://localhost:5000/users")
        .then(res => {
         setUsers(res.data);
        
        }).catch(err => {
            console.log(err);
        })
    }
    // const deluser = async(e)=>{
    //     try{
    //         await axios.delete("http://localhost:5000/users/"+e)
    //         console.log("del");
    //     }catch(er){
    //         console.log(er)
    //     }
    // }


    return (
        <div className='columns' > 
          <div className="columns is-half">

          
            <table className='table is-striped is-fullwidth mt-5'>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>نام</th>
                        <th>ایمیل</th>
                        <th>جنسیت</th>
                        <th>وظعیت</th>
                        </tr>
                </thead>
                <tbody>
                 
 
                    {
                      
                        users.map((users,index)=>{
                            return ( <tr key={users._id}>
                                <td>{index+1}</td>
                                <td>{users.name}</td>
                                <td>{users.email}</td>
                                <td>{users.gender === "female" ? "زن":"مرد"}</td>
                                <td>
                                    <Link to={`/edit/${users._id}`} className="button is-danger is-small">ویرایش</Link>
                                    <Link to={`/del/${users._id}`} type="submit" className="button is-danger is-small">حذف</Link>
                                    
                                </td>
                                </tr>)
                        })
                       
                    } 
                    
                    </tbody>
            </table>
            </div>  
            <Link to="/add" className="button is-success">افزودن کاربر</Link>  
        </div>
        
    );
}

export default Userlist;
