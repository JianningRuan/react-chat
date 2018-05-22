import unit from './../assets/js/unit';

const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
const LOGIN_MSG = 'LOGIN_MSG';
const UPDATE_DATA = 'UPDATE_DATA';
const LOG_OUT = 'LOG_OUT';
const initState = {
    redirectTo: '',
    user: '',
    type: '',
    msg: '',
    _id: ''
};

export function user(state = initState, action) {
    switch (action.type){
        case LOGIN_SUCCESS:
            return {...state, redirectTo: unit.getRedirectPath(action.userDate), ...action.userDate};
        case LOGIN_MSG:
            return {...state, redirectTo: unit.getRedirectPath(action.userDate),  ...action.userDate};
        case UPDATE_DATA:
            return {...state, redirectTo: unit.getRedirectPath(action.userDate), ...action.userDate};
        case LOG_OUT:
            return {...initState, redirectTo: '/login'};
        default:
            return state
    }
}

export function loginFinish(val){
    return {type: LOGIN_SUCCESS, userDate: val};
}

export function keepLogin(val) {
    return dispatch=>{
        dispatch({type: LOGIN_MSG, userDate: val})
    }
}

export function updateDate(val) {
    return dispatch=>{
        dispatch({type: UPDATE_DATA, userDate: val})
    }
}

export function toLogout() {
    return {type: LOG_OUT}
}