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
           <img style={{height:"500px",width:"1000px"}} src="https://www.leadsquared.com/wp-content/uploads/2021/11/banner-2-3.jpg"/>
        </div>  
        <div>
            <Button style={{margin:"10px 550px"}} className="user-login" onClick={() => navigate('/createstudent')}
                variant="contained"><b>Student Login</b></Button>
        </div>
        <div>
            <Button style={{margin:"5px 550px" }} className="profile-login" onClick={() => navigate('/createteacher')}
                variant="contained"><b>Teacher Login</b></Button>
        </div>
        </div>
        </div>
      </div>
     
      
    </div>
      
    )
}

export default Dashboard;