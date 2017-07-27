import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import {NavLink, Link, BrowserRouter, Route, Switch} from 'react-router-dom'
import About from './components/About'
import BaseLayout from './components/BaseLayout'
import Home from './components/Home'
import Portfolio from './components/Portfolio'

ReactDOM.render(
  <BrowserRouter>
    <BaseLayout>
      <Switch>
        <Route exact path ="/" component={Home}/>
        <Route exact path ="/about" component={About}/>
        <Route exact path ="/Portfolio" component={Portfolio}/>
      </Switch>
    </BaseLayout>
  </BrowserRouter>
  , document.getElementById('root'));
registerServiceWorker();
