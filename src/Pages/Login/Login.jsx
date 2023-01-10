import React,{useState} from "react";
import "../../Style/Login.scss";
import Header from '../../Component/Header'
import {Link,useNavigate} from 'react-router-dom'
export default function Login() {
    const navigate = useNavigate()
    const [phoneNumber,setPhoneNumber]=useState(0)
    const [dbPhone,setDbPhone]=useState([
        '087785192296','087785192297','087785192298','087785192299'
    ])
    const onInputPhone=(value)=>{
        setPhoneNumber(value)
    }
    const login=()=>{
        console.log(phoneNumber,' phone unber')
        let filter = dbPhone.filter((val,index)=>{
            return val === phoneNumber
        })
        if(filter){
            navigate('/home')
        }
    }
  return (
    <>
    <Header/>
      <div className="card-login">
        <h1>Personal account for business</h1>
        <div className="card-phone">
          <input type="number" placeholder="Phone Number" onChange={(e)=>onInputPhone(e.target.value)}  />
          <div className="btn-login" onClick={login}>Next</div>
        </div>
        <p>
          Don't have an account yet? <span>Sign up</span>
        </p>
        <div className="card-check">
          <input type="checkbox" />
          <p>
            I agree with <span>Term and condition</span> and{" "}
            <span>Privacy policy</span>{" "}
          </p>
        </div>
      </div>
    </>
  );
}
