import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Home from './Pages/Home/Home';
import Navbar from './Pages/Shared/Navbar/Navbar';
import Agent from './Pages/Agent/Agent';
import Pricing from './Pages/Pricing/Pricing';
import Listing from './Pages/Listing/Listing';
import Hotels from './Pages/Hotels/Hotels';
import Login from './Pages/Forms/Log_in/Login';
import Signin from './Pages/Forms/Sign_in/Signin';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/hotels" element={<Hotels/>} />
        <Route path="/agent" element={<Agent/>} />
        <Route path="/pricing" element={<Pricing/>} />
        <Route path="/listing" element={<Listing/>} />
        <Route path="/log_in" element={<Login/>} />
        <Route path="/sign_in" element={<Signin/>} />

        
      </Routes>
    </div>
  );
}

export default App;
