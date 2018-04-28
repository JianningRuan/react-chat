const LOGIN_MSG = 'LOGIN_MSG';
const initState = {
    user: '',
    type: ''
};

export  function user(state = initState, action) {
    switch (action.type){
        case LOGIN_MSG:
            return state;
        default:
            return state
    }
}

export function loginFinish(val){
    return dispatch=>{
        dispatch({type: LOGIN_MSG, userDate: val});
    }
}