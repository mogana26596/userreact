import './App.css';
import { Routes, Route} from "react-router-dom";
import Login from './Login';
import Dashboard from './Dashboard';
import Createuser from './user/Createuser';
import Edituser from './user/Edituser';
import Edituserform from './user/Edituserform';
import Viewuser from './user/Viewuser';
import Deleteuser from './user/Deleteuser';

import Createprofile from './profile/Createprofile';
import Editprofile from './profile/Editprofile';
import Viewprofile from './profile/Viewprofile';
import Edituserprofileform from './profile/Edituserprofileform';
import Deleteprofile from './profile/Deleteprofile';

function App() {
  return (
    <>
    <div>
    
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/createuser" element={<Createuser />} />
                <Route path="/viewuser" element={<Viewuser />} />
                <Route path="/edituser" element={<Edituser />} />
                <Route path="/edituserform" element={<Edituserform />} />
                <Route path="/deleteuser" element={<Deleteuser />} />


                <Route path="/createprofile" element={<Createprofile />} />
                <Route path="/viewprofile" element={<Viewprofile />} />
                <Route path="/editprofile" element={<Editprofile />} />
                <Route path="/edituserprofileform" element={<Edituserprofileform />} />
                <Route path="/deleteprofile" element={<Deleteprofile />} />
              </Routes>
      
    </div>
</>
              
  );
}

export default App;

