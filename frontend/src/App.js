import React,{component} from 'react';
import './App.css';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import Login from "./component/Login/Login";
import Register from "./component/Register/Register";
function App() {
  return (
   <div>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Register} />
          </Switch>
        </BrowserRouter>
      </div>
      
    );
}

export default App;
