import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Form from "./components/form";
import Login from "./components/login";
import Welcome from "./components/welcome";

function App() {
  return (
  <Router>    
    <Routes>
    
      <Route path="/login" element={<Login/>}/>
      <Route path="/form" element={<Form />}/>
      <Route path="/" element={<Welcome/>}/>
    </Routes>

  </Router>    

  );
}

export default App;
