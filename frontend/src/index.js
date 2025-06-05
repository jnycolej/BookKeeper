// Entry point for React app
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';    // Import your main App component
import { AuthProvider } from './AuthProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    // <React.StrictMode>
    //     <App />
    // </React.StrictMode>
    <AuthProvider>
        <App />
    </AuthProvider>,
);