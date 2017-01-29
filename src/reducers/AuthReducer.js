import {
    EMAIL_CHANGED,
    PASSWORD_CHANGED,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAIL,
    LOGIN_USER
} from '../actions/types';

//email은 val값으로 init 해야하기때문에 어쩔 수 없음
const INITIAL_STATE = { email: '' ,password: '',user:null, error:'',loading:false};


export default (state = INITIAL_STATE, action) => {

    switch (action.type) {
        case EMAIL_CHANGED:
            // state.email = action.payload;
            // {} == new obj
            // ...state = all state
            // add state
            return {...state, email:action.payload};

        case PASSWORD_CHANGED:
            return {...state, password:action.payload};

        case LOGIN_USER:
            return {...state, loading: true, error:''};
        case LOGIN_USER_SUCCESS:
            return {...state, ...INITIAL_STATE};

        case LOGIN_USER_FAIL:
            return {...state, error:'Auth Fail', password:'', loading:false};
        default:
            return state;
    }
};