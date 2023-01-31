import React from 'react';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";
import Sidebar from './Sidebar';
const Dashboard = () => {

    const navigate = useNavigate();

    return (
        <div id="page-top">
        <div id="wrapper">
          <Sidebar />
          <div id="content-wrapper" className="d-flex flex-column">
            {/* <!-- Main Content --> */}
           
              <div className="container-fluid">
        <div className='dashboard'>
           <img style={{height:"300px",width:"600px"}} src=" https://d35fo82fjcw0y8.cloudfront.net/2019/08/06134352/blog-header.png"/>
        </div>  
        <div>
            <Button style={{margin:"10px 350px"}} className="user-login" onClick={() => navigate('/createuser')}
                variant="contained"><b>User Login</b></Button>
        </div>
        <div>
            <Button style={{margin:"5px 350px" }} className="profile-login" onClick={() => navigate('/createprofile')}
                variant="contained"><b>User Profile Login</b></Button>
        </div>
        </div>
        </div>
      </div>
     
      
    </div>
      
    )
}

export default Dashboard;