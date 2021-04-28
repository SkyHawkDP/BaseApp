import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

// Your routes.js file
// import routes from './routes';
// <Router routes={routes} />

// below Replaced by BrowserRouter
//<React.StrictMode>
//</React.StrictMode>,


ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
//{  // had ; before the curly
//  return (
//    <div>
//      <main>
//        {this.props.children}
//      </main>
//    </div>
//  );
//}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
