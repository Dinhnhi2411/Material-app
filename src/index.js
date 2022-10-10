
import React from 'react';
import "./index.css";
import ReactDOM from 'react-dom';
import { BrowserRouter} from "react-router-dom";
import App from './App';
import AuthProvider from "./authen/AuthProvider";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <AuthProvider>
  
        <App/>
      
    </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
   document.getElementById('root')
 );
  