import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux'; //thunk는 미들웨어다 그러므로 redux에서 미들 웨어를 선언하여 가져온다.
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';

class App extends Component {

    componentWillMount() {
        const config = {
            apiKey: "AIzaSyBZueZQQuyTCxpg4JYjy-vTJ4I0_Re0Hc0",
            authDomain: "manager-7ea0e.firebaseapp.com",
            databaseURL: "https://manager-7ea0e.firebaseio.com",
            storageBucket: "manager-7ea0e.appspot.com",
            messagingSenderId: "160166664958"
        };
        firebase.initializeApp(config);
    }

    render() {

        //가운데 인자의 경우 any initial state 기본 상태값을 지정하고 싶을 때
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

        return (
            <Provider store={store}>
                <Router />
            </Provider>
        );
    }
}

export default App;