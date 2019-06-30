import React from 'react';
// import { observer,inject } from 'mobx-react'
import Count from './components/count';
import CountClass from './components/countClass';
import DevTools from 'mobx-react-devtools';
// @inject('Count')
// @observer
class App extends React.Component{
  render(){
    return (
      <div className="App">
        <Count />
        <p>=================================</p>
        <CountClass />
      </div>
    );
  }
  
}

export default App;
