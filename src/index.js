import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from "react-router-dom";


import {App} from './App';
import './assets/fonts/calibri.ttf';
import './assets/fonts/calibri_bold.ttf';

if (!process.env.REACT_APP_API_KEY) {
    alert('Please fill up .env file')
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </React.StrictMode>
)

