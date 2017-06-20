import React, { Component } from 'react';
import Instructions from "./Instructions";
import Articles from "./Articles";
import API from '../utils/API';

const TopicPanel = (props) => (
    <div className='col-md-7'>
        {props.children}
        <Instructions />
        <Articles />  
    
    </div>
)

export default TopicPanel;