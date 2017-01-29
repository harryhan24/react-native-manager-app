import{
    EMPLOYEE_UPDATE,
    EMPLOYEE_CREATE,
    EMPLOTEE_SAVE
} from '../actions/types';

const INITIAL_STATE = {
    name:'',
    phone: '',
    shift: 'Monday',
};


export default (state = INITIAL_STATE, action)=>{
    switch(action.type){
        case EMPLOYEE_UPDATE:
            //action.payload === { prop:'name', value:'jane'}
            //const newState = {}; 와 같은 용도
            //newState[action.payload.prop] = action.payload.value
            return {...state, [action.payload.prop]: action.payload.value };
        case EMPLOYEE_CREATE:
            //폼 초기화
            return INITIAL_STATE;
        case EMPLOTEE_SAVE:
            return INITIAL_STATE;
        default:
            return state;
    }
}