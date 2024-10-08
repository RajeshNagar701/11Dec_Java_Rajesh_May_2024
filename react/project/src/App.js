import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./website/pages/Index";
import About from "./website/pages/About";
import Services from "./website/pages/Services";
import Contact from "./website/pages/Contact";
import Dashboard from "./admin/pages/Dashboard";
import Add_location from "./admin/pages/Add_location";
import Manage_location from "./admin/pages/Manage_location";
import Manage_customer from "./admin/pages/Manage_customer";
import Manage_artist from "./admin/pages/Manage_artist";
import Manage_services from "./admin/pages/Manage_services";
import Manage_work from "./admin/pages/Manage_work";
import Manage_appointment from "./admin/pages/Manage_appointment";
import Manage_feedback from "./admin/pages/Manage_feedback";
import Manage_contact from "./admin/pages/Manage_contact";
import Add_artist from "./admin/pages/Add_artist";
import Alogin from "./admin/pages/Alogin";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        
        
        
        <Route path='/' element={<><Index /></>}></Route>
        <Route path='/about' element={<><About /></>}></Route>
        <Route path='/services' element={<><Services /></>}></Route>
        <Route path='/contact' element={<><Contact /></>}></Route>

        <Route path='/admin-login' element={<><Alogin /></>}></Route>
        <Route path='/dashboard' element={<><Dashboard /></>}></Route>
        <Route path='/add_location' element={<><Add_location /></>}></Route>
        <Route path='/manage_location' element={<><Manage_location /></>}></Route>
        <Route path='/manage_customer' element={<><Manage_customer /></>}></Route>
        <Route path='/add_artist' element={<><Add_artist /></>}></Route>
        <Route path='/manage_artist' element={<><Manage_artist /></>}></Route>
        <Route path='/manage_services' element={<><Manage_services /></>}></Route>
        <Route path='/manage_work' element={<><Manage_work /></>}></Route>
        <Route path='/manage_appointment' element={<><Manage_appointment /></>}></Route>
        <Route path='/manage_feedback' element={<><Manage_feedback /></>}></Route>
        <Route path='/manage_contact' element={<><Manage_contact /></>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
