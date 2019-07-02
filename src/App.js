import React from 'react';
import Index from './components/home';
import Todo from './components/todo';
import { Route,Switch } from 'react-router-dom';

class App extends React.Component{
  render(){
    return (
      <div className="App">
        <Switch>
        <Route path="/" exact component={ Index }></Route>
        <Route path="/todo" component={ Todo }></Route>
        </Switch>
      </div>
    );
  }
  
}

export default App;
