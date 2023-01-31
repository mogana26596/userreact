import React, { useEffect, useState }from "react";
import '../App.css';
import axios from "axios";
import Sidebar from "../Sidebar";
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

const Deleteprofile = () => {

  const [userprofiles, setuserprofile] = useState([]);

  useEffect(() => {
      getuserprofile();
  }, []);

  const getuserprofile = async () => {
      try{
          const response = await axios.get('https://usermanagement-backend.onrender.com/userprofile/get');
          setuserprofile(response.data);
      }catch(error){
          console.log('Error: ', error);
      }
  }
  const handleDelete = async (userprofileID) => {
    try{
        const response = await axios.delete(`https://usermanagement-backend.onrender.com/userprofile/delete/${userprofileID}`);
        if(response){
          getuserprofile();
        }
    }catch(error){
        console.log(error);
    }
}

return (
    <>  
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
            <th scope="col">Job Title</th>
            <th scope="col">Experience</th>
          </tr>
        </thead>
        <tbody>
            {userprofiles.length && userprofiles.map((userprofile, index) => (
                        <tr key={index}>
                            <td>{userprofile.Firstname}</td>
                            <td>{userprofile.Lastname}</td>
                            <td>{userprofile.date}</td>
                            <td>{userprofile.email}</td>
                            <td>{userprofile.phone}</td>
                            <td>{userprofile.jobtitle}</td>
                            <td>{userprofile. experience}</td>
                            <td>
                              <IconButton onClick={() => handleDelete(userprofile._id)} color="warning">
                              <DeleteIcon />
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
</>
  )
}

export default Deleteprofile ;