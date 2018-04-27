const LOGIN_MSG = 'LOGIN_MSG';
const initState = {
    user: ''
};

function user(state = {}, action) {
    switch (action.type){
        case LOGIN_MSG:
            return state;
        default:
            return state
    }
}

export default user;