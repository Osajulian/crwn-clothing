import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Homepage from './pages/homepage/homepage-component';
import './App.css';

const HatPage = props => {
  console.log(props)
  return (
    <div>HATS AGE</div>
  )
}

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route path='/hats' component={HatPage} />
      </Switch>
    </div>
  );
}

export default App;
