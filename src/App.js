 
import React from 'react'
import './App.css';
import {  Route, BrowserRouter, Switch } from 'react-router-dom';
import injectContext from './store/appContext';
import Home from './components/home';
import data1 from './components/data1';
import Maps from './components/map';
import Ubicacion from './components/ubicacion';
import VideoEspañol from './components/videoEspañol';
import Gringo from './components/gringo';
 
const App = props => {
 
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Home}/> 
          <Route exact path='/data' component={data1}/> 
          <Route exact path='/maps' component={Maps}/> 
          <Route exact path='/ubicacion' component={Ubicacion}/> 
          <Route exact path='/videoEspañol' component={Maps}/> 
          <Route exact path='/gringo' component={Gringo}/> 
        </Switch>
      </BrowserRouter>
    </>
  )
}
 
export default injectContext(App);
