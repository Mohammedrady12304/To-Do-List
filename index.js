import React from 'react'; //VDom
import ReactDOM from 'react-dom/client'; //compare vdon and dom
import App from './App';
import './assets/css/app.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <React.StrictMode>
  <App />   
  </React.StrictMode>
 
);

