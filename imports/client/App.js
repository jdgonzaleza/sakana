import React from 'react';
import Banner from './Banner';

export default class App extends React.Component{
    constructor(){
        super();
        this.state = {
            count: 0
        }
    }

    render(){
        return(
            <div>
                <Banner />
            </div>
        )
    }
}