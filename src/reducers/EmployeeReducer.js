import{
    EMPLOYEES_FETCH_SUCCESS
}from '../actions/types';

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action)=>{
    switch(action.type){

        case EMPLOYEES_FETCH_SUCCESS:
            //[id] 는 id에 있는거 꺼내기

            return action.payload;


        default:
            return state;
    }
}