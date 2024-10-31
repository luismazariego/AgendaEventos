import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import { AgendaEventosApp } from './AgendaEventosApp';
import './styles.css'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <BrowserRouter>
            <AgendaEventosApp />
        </BrowserRouter>
    </React.StrictMode>
)