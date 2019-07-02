import React,{ Component } from 'react';
// import { observer,inject } from 'mobx-react'
import Count from './count';
import CountClass from './countClass';
// import DevTools from 'mobx-react-devtools';
import TopPic from './topPic';
import Test from './extend';

// @inject('Count')
// @observer
class Index extends Component{
    render(){
        return (
            <div className="index">
                <Count />
                <p>=================================</p>
                <CountClass />
                <p>=================================</p>
                <TopPic />
                <p>=================================</p>
                <Test />
            </div>
        )
    }
}

export default Index;