//Required Imports
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './styles.css';
import { ContextProvider } from './SocketContext';

//Rendering our App component where we will have our frontend for entire Video application.
ReactDOM.render(


<ContextProvider>

<App />

</ContextProvider>


,document.getElementById('root')
);