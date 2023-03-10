import React from "react";
import {Routes,BrowserRouter,Route} from "react-router-dom";
import Dashboard from "./core/Dashboard";
import Signup from "./core/Signup";
import Signin from "./core/Signin";
import Chart from "./core/Chart";
const  App = () => {
  return (
    <div>
     <BrowserRouter>
     <Routes>
          <Route path="/" element = {<Dashboard />} />
          <Route path="/signup" element = {<Signup />} />
          <Route path="/signin" element = {<Signin />} />
          <Route path="/chart" element = {<Chart />} />
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
