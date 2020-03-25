import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import store from "./store";
import { Route, Redirect, BrowserRouter } from "react-router-dom";
import * as serviceWorker from './serviceWorker';
import Loader from "./components/shared/app/Loader";
import Cookies from 'universal-cookie';

//-----------Layout--------------
import App from './layout/App';
//-------------------------------

//-----------Style---------------
import './scss/index.scss';
//-------------------------------
const cookies = new Cookies();


function checkLogin(){
    var jtkn = cookies.get('at');
    if(jtkn) return true;
    return false
}

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Loader/>     
            <Route exact path="/" component={App} />            
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);

serviceWorker.unregister();