import React, { useState }  from 'react'

import { Link,useNavigate  } from 'react-router-dom'
import Swal from "sweetalert2";
import { API_URL } from '../Helper';


export default function Register(){

   const [name, setName] = useState("")
   const [email, setEmail] = useState("")
   const [password, setPassword] = useState("")
   const redirect = useNavigate() ;

 function swalalert(type,Message){  
  Swal.fire({  
    title: 'Success',  
    type: type,  
    text: Message 
  });  
}  

async function userregister(){

  let item={name,email,password}
  const headerreq = {
    method:'POST',
    headers: {'Content-Type':'application/json','Accept':'application/json' },
    body: JSON.stringify(item)
  }

   //const  response = await fetch("http://localhost:8000/api/register",headerreq);
   const  response = await fetch(`${API_URL}users/user`,headerreq);
  // console.log(response)
   const data =  await response.json();
   localStorage.setItem("user_info",JSON.stringify(data.user_info))
   setName("")
   setEmail("")
   setPassword("")
   swalalert("success",data.message);
   redirect('/Login')

  }


  // onInputchange = (event) => {
  //   this.setState({
  //     [event.target.name] : event.target.value
  //   })
  // } 


  return (
    <div>
 
    <div className='container'>
                   
                   <div className="row ">
                   <div className="col-md-4 "></div>
                   
                       <div className="col-md-4 my-5">
                       <h1>Register</h1>
                          <div className=" form-floating mb-3">
                               <input type="text" value={name} onChange={(e)=>setName(e.target.value)} class="form-control"  id="floatingname" placeholder="Enter Name" />
                               <label htmlFor="floatingname">Name</label>
                           </div>
                           <div className=" form-floating mb-3">
                               <input type="email"  value={email} onChange={(e)=>setEmail(e.target.value)} class="form-control"  id="floatingInput" placeholder="name@example.com" />
                               <label htmlFor="floatingInput">Email address</label>
                           </div>
                           <div className="form-floating">
                               <input type="password"  value={password} onChange={(e)=>setPassword(e.target.value)} class="form-control"  id="floatingPassword" placeholder="Password" />
                               <label htmlFor="floatingPassword">Password</label>
                           </div>
                             <Link to="/Login">Login</Link>
             
                           <button className='btn btn-primary btn-md my-3' onClick={userregister}>Register</button>
                       </div>
                       <div className="col-md-4 "></div>
                   </div>
               </div>
    
    </div>
  )
  
}
