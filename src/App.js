import React from 'react'
import Home from '../src/componentes/Home'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
  } from 'react-router-dom'
import { Personajes } from './componentes/Personajes'




function App() {

  return (
    <Router>
    <Switch>
   <Route exact path="/">
      <Home></Home>
     </Route>
     <Route  path="/people/:name">
    <Personajes></Personajes>
     </Route>

     </Switch>
 </Router>

  );
}

export default App;
