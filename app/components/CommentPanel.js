import React, { Component } from 'react';

import CommentForm from "./CommentForm";

const CommentPanel = () => (
    <div className='col-md-5'>
       <CommentForm />
       Previous comments will load here
    </div>
)

export default CommentPanel;