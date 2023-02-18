import React from 'react';
import ReactDOM  from 'react-dom/client';
import App from './App';
import './index.css'; 

// ReactDOM.render(<App />,document.getElementById('root'));
//React Dom is no longer supported .

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App /> 
    </React.StrictMode>
);



