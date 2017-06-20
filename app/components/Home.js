import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import router from "react-router";


import App from "../App";
import Jumbo from "./Jumbo";
import Instructions from "./Instructions";

const Home = () => (
  <Router>
      <div className='container'>

          <Jumbo />
          <div className='col-md-7'>
            <Instructions />
          </div>
          
          <div className='col-md-5'>
            <Route path="/" component={App}
            />
          </div>
          
    </div>
  </Router>
);

export default Home;
