import {useState,useEffect} from "react";
import {Link, Router, withRouter} from "react-router-dom";
import { connect } from "react-redux";
// import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { UserDetails } from "../reduxstore/middlewares";

let Navbar= (props)=>{
  // const [message,setMessageDisplay]=useState(props.AuthReducer?.message)
  let searchstring=""
 console.log(props)
  useEffect(()=>{
    if(localStorage.token){

      props.dispatch(UserDetails())
    }
  // setLoading(false)
  })
  let  search = (event)=>{
   
    event.preventDefault()
    
    if(searchstring != null && searchstring !==""){
        var url = "/search?q="+searchstring
        props.history.push(url)
    }
  }

  let getserchText = (event)=>{
    searchstring = event.target.value;
  }
 
 let logout = ()=>{

  localStorage.clear();
  props.history.push("/login")
 }

    return(
     <>
     <div>
       <ToastContainer autoClose={1000} />
     </div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark navbar-fixed-top">
        <div className="container">
          <div className="col-6">
              <Link to="/">
            <a className="navbar-brand" href="#"> <img src="././asset/qqq.png" width="30" height="30" alt=""/> 부산 부동산 입니다 </a>
          
              </Link> 
              <a className="navbar-brand">|</a>
              <Link to="test.html">
            <a className="navbar-brand" href="test.html">실시간 정보</a>
          
              </Link> 
    
          </div>
          <div className="col-6">
      
      <div className="collapse navbar-collapse align-items-end" id="navbarSupportedContent">
     
    <form className="d-flex align-items-end">
      <input className="form-control me-2" onChange = {getserchText} type="search"  placeholder="Search" aria-label="Search"/>
    
      <button className="search btn btn-outline-success" onClick={search} type="submit">Search</button>
    </form>
    </div>
        </div>
        </div>
      
      </nav>
       
     </>
    
    )
}


// Navbar = withRouter(Navbar)
Navbar =connect(function(state,props){
  // console.log("props navbar " + JSON.stringify(state.AuthReducer))
	  return {
      token:state.AuthReducer?.token,
		  isloading:state.AuthReducer?.isloading,
      User_role:state.AuthReducer?.User_role

	  }
  
})(Navbar) 
export default  withRouter(Navbar); 
