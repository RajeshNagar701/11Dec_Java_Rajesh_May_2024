import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./website/pages/Index";
import About from "./website/pages/About";
import Services from "./website/pages/Services";
import Contact from "./website/pages/Contact";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<><Index /></>}></Route>
        <Route path='/about' element={<><About /></>}></Route>
        <Route path='/services' element={<><Services /></>}></Route>
        <Route path='/contact' element={<><Contact /></>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
