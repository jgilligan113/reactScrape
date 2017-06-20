import React, { Component } from 'react';

const ArticlePanel = (props) => (
    <li className="list-group-item post-title">
        Title: {props.title} <br />
        <a href={props.link}>Link to article</a><span className='badge'>{props.notes.length}</span>
        
    </li>
)

export default ArticlePanel;