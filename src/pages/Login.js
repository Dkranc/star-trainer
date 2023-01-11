import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import './Login.css'
import { API } from 'aws-amplify'

const myAPI = "api21f72a2c"
const path = '/users'; 


const LoginPage = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState(false);
  const [authenticated, setauthenticated] = useState(
    localStorage.getItem(localStorage.getItem("authenticated") || false)
    );

 



//handle login request
  const handleClick = (e) => {
    e.preventDefault();
  if (email&&password){
    let uid = email // must change 
    API.get( myAPI , path + "/" + uid)
       .then(response => {
        console.log(response)
        setUser(response.userName)
        console.log(user)

       })
       .catch(error => {
         console.log(error)
       })
      }
      else {
        window.error('נא להזין את כל השדות')
      }

 /*   try{
      e.preventDefault();
       
       login();

    }

    catch{

    }*/

  };

  const login= ()=>{
  //get the user data

     //if succeded
     localStorage.setItem('auth', true);
     console.log(localStorage.getItem("auth"))
     navigate(`/home`, { replace: true });

     //if not

    
   
  }

  return (
    <form  >
    <img id="star-logo" src="/star.jpg" alt="star Logo" />

    <input required
          type="email"
          id="email"
          placeholder='שם משתמש (מייל)' 
          value={email}
          onChange={e => setEmail(e.target.value)}
        /><br />
        <input
          required
          type="password"
          id="password"
          placeholder='סיסמה'
          value={password}
          onChange={e => setPassword(e.target.value)}
        /><br />
        { error && <h4>אחד מהשדות שהוזנו אינם תקינים</h4>}
        <button onClick={(e)=> handleClick(e)}  type="button" >התחברות</button> 
      </form>

    
  );
};

export default LoginPage;
