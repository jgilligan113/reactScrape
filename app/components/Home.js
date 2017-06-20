import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import router from "react-router";


import App from "../App";
import Jumbo from "./Jumbo";


const Home = () => (
  <Router>
    <div className='container'>

        <Jumbo />
            <Route path="/" component={App}
            />
          
    </div>
  </Router>
);

export default Home;
