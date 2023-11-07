import React from 'react'
import YouTube from 'react-youtube';
import ReactDOM from 'react-dom/client'
import App from './App'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root'))



.render(
    <BrowserRouter>
    
    <App/>
    
    </BrowserRouter>
)
