import React, {useState, useEffect} from "react";
import '../App.css';
import Sidebar from "../Sidebar";
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';

function Edituserform() {
    const params = useParams();
    const navigate = useNavigate();
    const adminID = params.adminID;

    const [userDetails, setuserDetails] = useState({
        Firstname: '',
        Lastname: '',
        date: '',
        email: '',
        phone: '',
        location: ''
    });

    useEffect(() => {
        axios.get(`https://usermanagement-backend.onrender.com/user/get/${adminID}`).then((response) => {
            setuserDetails(response.data);
        }).catch(error => {
            console.log('Error: ', error);
        })
    }, [adminID]);

    const handleInput = (value) => {
        return setuserDetails(user => {
            return {...user, ...value}
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        console.log('Updating user details...');
        try{
            const response = await axios.put(`https://usermanagement-backend.onrender.com/user/update/${adminID}`, userDetails);
            if(response){
                setuserDetails({
                    Firstname: '',
                    Lastname: '',
                    date: '',
                    email: '',
                    phone: '',
                    location: ''
                });
                navigate('/edituser');
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
                <TextField value={userDetails.Firstname} onChange={e => handleInput({Firstname: e.target.value})}
                    label="First Name" type="name" variant="standard" />

                <TextField value={userDetails.Lastname} onChange={e => handleInput({Lastname: e.target.value})}
                    label="Last Name" type="name" variant="standard" />

                <TextField value={userDetails.date} onChange={e => handleInput({date: e.target.value})}
                    label="DOB" type="date" variant="standard" />

                <TextField value={userDetails.email} onChange={e => handleInput({email: e.target.value})}
                    label="Email" type="email" variant="standard" />

                <TextField value={userDetails.phone} onChange={e => handleInput({phone: e.target.value})}
                    label="Phone" type="number" variant="standard" />

                <TextField value={userDetails.location} onChange={e => handleInput({location: e.target.value})}
                    label="Location" type="name" variant="standard" />
            </div>
             
            <button style={{margin:"35px  480px"}} type="button" class="btn btn-primary" onClick={handleSubmit}><b>Add Librarian</b></button>
        
        </div>
        </div>
        </div>
      </div>
     
      
    </div>

);
}

export default Edituserform;