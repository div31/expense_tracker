import React from 'react'
import ReactDOM from 'react-dom';
import { SpeechProvider } from '@speechly/react-client';

import { Provider } from './context/context';

import App from './App';
import './index.css';

ReactDOM.render(
    <SpeechProvider appId="7f64051c-5df8-4101-ad51-5213562b536c" language="en-US">
    <Provider>
        <App />  
    </Provider>
    </SpeechProvider>,
    document.getElementById('root'))