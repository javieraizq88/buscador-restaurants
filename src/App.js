 
import React from 'react'
import './App.css';
import {  Route, BrowserRouter, Switch } from 'react-router-dom';
import injectContext from './store/appContext';
import Home from './components/home';
import data1 from './components/data1';
import Maps from './components/map';
import Ubicacion from './components/ubicacion';
import BuscarNombre from './components/buscar';
import BuscarUbicacion from './components/buscarUbicacion';
import Navbar from './components/navbar';
 
const App = props => {
 
  return (
    <>
      <BrowserRouter>
      <Navbar/>
        <Switch>
          <Route exact path='/' component={Home}/> 
          <Route exact path='/buscarubicacion' component={BuscarUbicacion}/> 
          <Route exact path='/buscarnombre' component={BuscarNombre}/> 
          <Route exact path='/data' component={data1}/> 
          <Route exact path='/maps' component={Maps}/> 
          <Route exact path='/ubicacion' component={Ubicacion}/> 
          <Route exact path='/videoEspañol' component={Maps}/> 
        </Switch>
      </BrowserRouter>
    </>
  )
}
 
export default injectContext(App);
