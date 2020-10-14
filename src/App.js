 
import React from 'react'
import './App.css';
import {  Route, BrowserRouter, Switch } from 'react-router-dom';
import injectContext from './store/appContext';
import Home from './components/home';
import data1 from './components/data1';
 
const App = props => {
 
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Home}/> 
          <Route exact path='/data' component={data1}/> 
        </Switch>
      </BrowserRouter>
    </>
  )
}
 
export default injectContext(App);
