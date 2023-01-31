import React from 'react';
import { useNavigate } from 'react-router-dom';

function Sidebar() {
    const navigate = useNavigate();

    return (
         
        <ul className="navbar-nav bg-warning sidebar sidebar-dark accordion" id="accordionSidebar">

        {/* <!-- Sidebar - Brand --> */}
         <a className="sidebar-brand d-flex align-items-center justify-content-center" href="">
            <div className="sidebar-brand-icon rotate-n-15">
               <i style={{color:"rgb(90, 95, 108)"}} className="fa-brands fa-slack"></i>
            </div>
            <div className="sidebar-brand-text text-dark mx-3">Users Admin Dashboard</div>
        </a>

        {/* <!-- Divider --> */}
        <hr className="sidebar-divider my-0" />

        {/* <!-- Nav Item - Dashboard --> */}
        <li className="nav-item active ">
            <a className="nav-link" onClick={() => navigate("/dashboard")}>
            <img style={{height:"50px",width:"50px"}} src="https://static.vecteezy.com/system/resources/previews/008/329/474/original/dashboard-icon-style-free-vector.jpg"/>&nbsp;&nbsp;
            <span className="text-dark" style={{fontSize:"15px"}}>Dashboard</span></a>
        </li>

        {/* <!-- Divider --> */}
        <hr className="sidebar-divider" />

        {/* <!-- Heading --> */}
        <div className="sidebar-heading text-dark">
            Interface
        </div>

        {/* <!-- Nav Item - Student Collapse Menu --> */}
        <li className="nav-item">
            <a className="nav-link collapsed" href="" data-toggle="collapse" data-target="#collapseTwo"
                aria-expanded="false" aria-controls="collapseTwo">
                <img style={{height:"50px",width:"50px"}} src="https://thumbs.dreamstime.com/b/internet-users-linear-icon-concept-internet-users-line-vector-sign-symbol-illustration-internet-users-line-icon-vector-117094510.jpg"/>&nbsp;&nbsp;
                <span className="text-dark" style={{fontSize:"15px"}}><b>Users</b></span>
            </a>
            <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
                <div className="bg-white py-2 collapse-inner rounded">
                    <h6 className="collapse-header">Users</h6>
                    <a className="collapse-item"  onClick={() => navigate("/createuser")}>Create user</a>
                    <a className="collapse-item"  onClick={() => navigate("/viewuser")}>View user</a>
                    <a className="collapse-item"  onClick={() => navigate("/edituser")}>Edit user</a>
                    <a className="collapse-item"  onClick={() => navigate("/deleteuser")}>Delete user</a>
                    

                </div>
            </div>
        </li>

        {/* <!-- Nav Item - Teacher Collapse Menu --> */}
        <li className="nav-item">
            <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseTeacher"
                aria-expanded="true" aria-controls="collapseUtilities">               
                <span className="text-dark" style={{fontSize:"15px"}}><img style={{height:"50px",width:"50px"}} src="https://thumbs.dreamstime.com/b/people-vector-icon-group-symbol-illustration-businessman-logo-multiple-users-silhouette-153483996.jpg"/> <b>&nbsp;Users Profile</b></span>
            </a>
            <div id="collapseTeacher" className="collapse" aria-labelledby="headingUtilities"
                data-parent="#accordionSidebar">
                <div className="bg-white py-2 collapse-inner rounded">
                    <h6 className="collapse-header">Users Profile</h6>
                    <a className="collapse-item"  onClick={() => navigate("/createprofile")}>Create Profile</a>
                    <a className="collapse-item"  onClick={() => navigate("/viewprofile")}>View profile</a>
                    <a className="collapse-item"  onClick={() => navigate("/editprofile")}>Edit profile</a>
                    <a className="collapse-item"  onClick={() => navigate("/deleteprofile")}>Delete profile</a>
                    
                </div>
            </div>
        </li>

        {/* <!-- Divider --> */}
        <hr className="sidebar-divider" />

        {/* <!-- Sidebar Toggler (Sidebar) --> */}
        <div className="text-center d-none d-md-inline">
            <button className="rounded-circle border-0" id="sidebarToggle"></button>
        </div>                                            
    </ul>                       
        //  {/* <!-- End of Sidebar --> */}
    )
};

export default Sidebar;