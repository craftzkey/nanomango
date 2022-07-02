import React from 'react';
import ReactDom from 'react-dom/client';
import Website from '../index';

ReactDom.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <Website />
    </React.StrictMode>
)
