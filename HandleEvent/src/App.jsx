 import { useState } from 'react';

 function LoginForm(){
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  const [confirmPassword,setConfirmPassword]=useState("")
  const [errors,setErrors]=useState({})

  function validate(){
    const newErrors = {};

    if(!email.trim()){
      newErrors.email="Email is Required";
    }
    else if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email='Email Formate is invalid'
    }

    if(!password.trim()){
      newErrors.password="password is Required";
    }
    else if(password.length < 6){
      newErrors.password='password must be at least 6 characters'
    }

    if(!confirmPassword.trim()){
      newErrors.confirmPassword='confirm password is Required'
    }
    else if(confirmPassword !== password){
      newErrors.confirmPassword = "password is do not match"
    }

    return newErrors;
  }

  function handleSubmit(e){
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if(Object.keys(validationErrors).length === 0){
      console.log('login with',{email,password});
    }
  }
  

  return(
    <form onSubmit={handleSubmit}>
      <div>
        <label>Email</label>
        <input 
        type='text'
        placeholder='email'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        >
        </input>
        {errors.email && <p style={{color:'red'}}>{errors.email}</p>}
      </div>
      <div>
        <label>password</label>
        <input
        type='password'
        placeholder='password'
        value={password}
        onChange= {(e) => setPassword(e.target.value)}
        >
        </input>
        {errors.password && <p style={{color:'red'}}>{errors.password}</p>}
      </div>
      <div>
        <label>confirm Password</label>
        <input
        type='password'
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        >
        </input>
        {errors.confirmPassword && <p style={{color:'red'}}>{errors.confirmPassword}</p>}
      </div>
      <button
      type='submit'
      disabled={!email || !password ||!confirmPassword}
      >
        login
      </button>
    </form>

  )
 };
 export default LoginForm;
