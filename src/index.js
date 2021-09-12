import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Postagens from './components/Postagens';
import Albuns from './components/Albuns';
import Todos from './components/Todos';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path="/" exact={true} component={App} />
        <Route path="/postagens" component={Postagens} />
        <Route path="/albuns" component={Albuns} />
        <Route path="/to-dos" component={Todos} />
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
