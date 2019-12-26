import React from 'react';
import {BrowserRouter as Router, Route,Switch} from 'react-router-dom'
import './App.css';
import Login from './Components/Login';
import Search from './Components/Search';


function App() {
  return (
    <div className="App">
      <Router>
          <div>                            
          <Switch>
          <Route exact path="/" component={Login}/>
          <Route path="/search/" component={Search}/>          
          </Switch>   
          </div>
      </Router>    
    </div>
  );
}

export default App;
