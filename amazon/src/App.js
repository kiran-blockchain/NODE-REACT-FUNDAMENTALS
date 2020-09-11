import React from 'react';
import Header from './components/Header'
import {LoginComponent} from './components/Login'
import { Register } from './components/Register';
//This is called pure component or stateless Component
const App = () => {
    const comanyName='Pega Systems';
    return <div>
        <Header title={comanyName} />
        <Register/>
    </div>;
};

export default App;

