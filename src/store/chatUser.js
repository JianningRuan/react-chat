import * as server from './../api/server';

const USER_LIST = 'USER_LIST';
const initState = {
    userList: []
};

export function chatUser(state=initState, action) {
    switch (action.type){
        case USER_LIST:
            return {...state, userList: action.userList};
        default:
            return state
    }
}

export function getUserList(type){
    return dispatch=>{
        server.userList({type: type}).then((res)=>{
            if (res.status === 200 && res.data.code === 1){
                dispatch({type: USER_LIST, userList: res.data.data})
            }
        })
    }
}