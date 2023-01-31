import React from 'react';
import TextField from '@mui/material/TextField';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Sidebar from "../Sidebar";
const Createprofile = () => {

    const navigate = useNavigate();
    const [userprofileDetails, setuserprofileDetails] = useState({
        Firstname: '',
        Lastname: '',
        date: '',
        email: '',
        phone: '',
        jobtitle: '',
        experience: ''
    });

    const handleInput = (value) => {
        return setuserprofileDetails(userprofile => {
            return {...userprofile, ...value}
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        console.log('Submitting userprofile details...');
        try{
            const response = await axios.post('https://usermanagement-backend.onrender.com/userprofile/create', userprofileDetails);
            if(response){
                setuserprofileDetails({
                    Firstname: '',
                    Lastname: '',
                    date: '',
                    email: '',
                    phone: '',
                    jobtitle: '',
                    experience: ''
                });
                navigate('/viewuserprofile');
            }
        }catch(error){
            console.log('Error: ', error)
        }
    }

    return (
        <div id="page-top">
        <div id="wrapper">
          <Sidebar />
          <div id="content-wrapper" className="d-flex flex-column">
            {/* <!-- Main Content --> */}
           
              <div className="container-fluid">
          <div>
              <div className="add-user" style={{marginTop:"100px", marginLeft:"180px"}}>
                  <TextField value={userprofileDetails.Firstname} onChange={e => handleInput({Firstname: e.target.value})}
                      label="First Name" type="name" variant="standard" />
                      
                <TextField value={userprofileDetails.Lastname} onChange={e => handleInput({Lastname: e.target.value})}
                    label="Last Name" type="name" variant="standard" />

                <TextField value={userprofileDetails.date} onChange={e => handleInput({date: e.target.value})}
                    label="DOB" type="date" variant="standard" />

                <TextField value={userprofileDetails.email} onChange={e => handleInput({email: e.target.value})}
                    label="Email" type="email" variant="standard" />

                <TextField value={userprofileDetails.phone} onChange={e => handleInput({phone: e.target.value})}
                    label="Phone" type="number" variant="standard" />

                <TextField value={userprofileDetails.jobtitle} onChange={e => handleInput({jobtitle: e.target.value})}
                    label="Jobtitle" type="name" variant="standard" />
                      
                      <TextField value={userprofileDetails.experience} onChange={e => handleInput({experience: e.target.value})}
                    label="Experience" type="name" variant="standard" />

        </div> 
        <button style={{margin:"35px  480px"}} type="button" class="btn btn-primary" onClick={handleSubmit}><b>Add user Profile</b></button>
        </div>
        </div> 
        </div> 
        </div> 
        </div>
    )
}

export default Createprofile;