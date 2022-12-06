import axios from "axios";
import { useEffect, useState } from "react";
import { useForm } from 'react-hook-form';
import { useNavigate } from "react-router-dom";
import "./signupform.css";
function SignupForm(props) {
  const [textState, setTextState] = useState();
  useEffect(()=>{
    setTextState(props.currentPage);
  },[]);
  const navigate=useNavigate();
  const headers={"Content-Type":"application/json"};
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm( {
    mode: "onChange"
  });

  const onSubmit=(data)=>{

    if(textState==="name")
    {
      setTextState("phone");
    }
    else if(textState==="phone")
    {
      setTextState("password");
    }
    else if(textState==="password")
    {
      axios.post("https://test.nexisltd.com/signup",data,headers).then(res=>{
        alert("User added successfully");
        setTextState("login");
        navigate("/login");
      }).catch(res=>alert("User add failed, Couldn't connect to server"))
    }
    else if(textState==="login")
    {
      const updatedData={
        email:data.login_email,
        password:data.login_password
      }
      axios.post("https://test.nexisltd.com/login",updatedData,headers).then(res=>{
        alert("Logged in successfully");
        localStorage.setItem("access_token",res.data.access_token);
        localStorage.setItem("refresh_token",res.data.refresh_token);
        navigate("/attendance");
      }).catch(res=>alert("Login failed, Couldn't connect to server"))
    }


  }

  const entryClick=()=>
  {
    if(textState==="name")
    {
      setTextState("login");
      navigate("/login");
    }
    else if(textState==="login")
    {
      setTextState("name");
      navigate("/signup");
    }
  }

  const backClick=()=>
  {
    if(textState==="phone")
    {
      setTextState("name");
    }
    else if(textState==="password")
    {
      setTextState("phone");
    }
  }

  return (
    <div className="signupform">
      <h1 className="signupform__header">{textState === "login"?"Login":"SignUp Form" }</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
      {textState === "name" && <div className="signupform__text">
          <input
            className="signupform__text__firstname"
            placeholder="Write First Name"
            {...register('first_name',  { required: true})}
          ></input>
          {errors.first_name && errors.first_name.type=="required" && <p className="signupform__text__character">First Name Required</p>}
          <input
            className="signupform__text__lastname"
            placeholder="Write Last Name"
            {...register('last_Name',  { required: true})}
          ></input>
          {errors.last_Name && errors.last_Name.type=="required" && <p className="signupform__text__character">Last Name Required</p>}
        </div>
      }
      {textState === "phone" && <div className="signupform__text">
          <div className="signupform__text__phone">
            <p className="phone-email__phone__code">+880</p>
            <input className="phone-email__phone__number" placeholder="1xxxxxxxxxx"
            {...register('phone_number',  { required: true})}
            ></input>
            
          </div>
          {errors.phone_number && errors.phone_number.type=="required" && <p className="signupform__text__character">Phone Number Required</p>}
          <input className="signupform__text__email" placeholder="Write Email Address"
          {...register('email',  { required: true})}
          ></input>
          {errors.email && errors.email.type=="required" && <p className="signupform__text__character">Email Address Required</p>}
        </div>
      }
      {textState === "password" && <div className="signupform__text">
          <input type="password" className="signupform__text__password" placeholder="Write Password"
          {...register('password',  { required: false,pattern:/.{8,}/})}
          ></input>
          {errors.password && errors.password.type=="pattern" && <p className="signupform__text__character">Your password must be 8 character</p>}
        </div>
      } 

      {textState === "login" && <div className="signupform__text">
          <input className="signupform__text__email" placeholder="Write Email Address"
          {...register('login_email',  { required: true})}
          ></input>
          {errors.login_email && errors.login_email.type=="required" && <p className="signupform__text__character">Email Address Required</p>}
          <input type="password" className="signupform__text__password" placeholder="Write Password"
          {...register('login_password',  { required: true,pattern:/.{8,}/})}
          ></input>
          {errors.login_password && errors.login_password.type=="pattern" && <p className="signupform__text__character">Your password must be 8 character</p>}
          {errors.login_password && errors.login_password.type=="required" && <p className="signupform__text__character">Password required</p>}
        </div>
      }           

      <div className="signupform__button">
        <p className="signupform__button__back" onClick={backClick}>{(textState === "phone" || textState === "password")?"Back":""}</p>
        <input type="submit" className="signupform__button__next" value={(textState === "name" || textState === "phone")?"Next Step":textState === "login"?"Log In":"Sign Up"}/>
      </div>
      </form>
      {(textState === "name" || textState === "login") &&
      <div className="signupform__control">
        <p className="signupform__control__account">{textState === "login"?"Don’t have an account?":"Already have an account?"}</p>
        <p className="signupform__control__login" onClick={entryClick}>{textState === "login"?"SIGNUP HERE!":"LOGIN HERE!"}</p>
      </div>
      }
    </div>
  );
}
export default SignupForm;
