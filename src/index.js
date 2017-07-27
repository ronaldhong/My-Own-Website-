import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import {NavLink, Link, BrowserRouter, Route, Switch} from 'react-router-dom'
import About from './components/About'
import BaseLayout from './components/BaseLayout'
import Home from './components/Home'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'

ReactDOM.render(
  <BrowserRouter>
    <BaseLayout>
      <Switch>
        <Route exact path ="/" component={Home}/>
        <Route  path ="/about" component={About}/>
        <Route  path ="/Portfolio" component={Portfolio}/>
        <Route path ="/contact" component={Contact} />
      </Switch>
    </BaseLayout>
  </BrowserRouter>
  , document.getElementById('root'));
registerServiceWorker();
