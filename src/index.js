import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import './index.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// render((
//   <Router history={hashHistory}>
//     <Route path="/" component={MyApp}/>
//     <Route path="/red" component={Red}/>
//     <Route path="/blue/:id" component={Blue}/>
//   </Router>
// ), document.getElementById('root'));
