import React, { useEffect, useState }from "react";
import '../App.css';
import axios from "axios";
import Sidebar from "../Sidebar";
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import {useNavigate} from 'react-router-dom';

const Edituser = () => {

  const navigate = useNavigate();
  const [users, setuser] = useState([]);

  useEffect(() => {
      getuser();
  }, []);

  const getuser = async () => {
      try{
          const response = await axios.get('https://usermanagement-backend.onrender.com/user/get');
          setuser(response.data);
      }catch(error){
          console.log('Error: ', error);
      }
  }

return (
 
 <div id="page-top">
      <div id="wrapper">
        <Sidebar />
        <div id="content-wrapper" className="d-flex flex-column">
          {/* <!-- Main Content --> */}
         
            <div className="container-fluid">
       <table class="table table-striped" >
        <thead style={{textAlign: "center"}}>
          <tr>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">DOB</th>
            <th scope="col">Email</th>
            <th scope="col">Phone</th>
            <th scope="col">Location</th>
          </tr>
        </thead>
        <tbody>
            {users.length && users.map((user, index) => (
                        <tr key={index}>
                            <td>{user.Firstname}</td>
                            <td>{user.Lastname}</td>
                            <td>{user.date}</td>
                            <td>{user.email}</td>
                            <td>{user.phone}</td>
                            <td>{user.location}</td>
                            <td>
                            <IconButton onClick={()=>navigate("/edituserform")} color="warning">
                              <EditIcon />
                              </IconButton>
                            </td>
                        </tr>
                    ))}
                </tbody>
      </table>
      </div>
        </div>
      </div>
     
      
    </div>

  )
}

export default Edituser;