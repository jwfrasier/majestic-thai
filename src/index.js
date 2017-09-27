import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import './styles/App.css';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Route, Switch } from "react-router-dom"
import About from './components/About.js'
import Appetizers from './components/Appetizers.js'
import Desserts from './components/Desserts.js'
import Email from './components/Email.js'
import Entrees from './components/Entrees.js'
import Findus from './components/Findus.js'
import BaseLayout from './components/Layout.js'
import Menu from './components/Menu.js'


//IMPORT BROWSER ROUTER, ROUTER AND SWITCH
//IMPORT COMPONENTS



ReactDOM.render(
  <BrowserRouter>
    <div>
    <BaseLayout/>
          <Route path="/" exact component={About}/>
          <Route path="/Findus" component={Findus}/>
          <Route path="/Menu" component={Menu}/>
        </div>
      </BrowserRouter>


  , document.getElementById('root'));
registerServiceWorker();
