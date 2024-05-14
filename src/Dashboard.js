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
           <img style={{height:"500px",width:"1000px"}} src=" https://media.licdn.com/dms/image/C560DAQHAZQTmuuRihg/learning-public-crop_288_512/0/1627585438271?e=2147483647&v=beta&t=3JZ70zMxZHnaI2Euj60nF-scNrmsTeb8NGI71Rq6phw"/>
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