import React, { Component } from 'react';
import CommentForm from './components/CommentForm';

class App extends Component {
    constructor() {
        super();

        this.state = {
            articles: [],
        }

    }


    

    render() {
        return (
            <div className='App'>
                
                <CommentForm />
            </div>
        )
    }


}

export default App;