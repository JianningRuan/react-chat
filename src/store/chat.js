import io from "socket.io-client";
import * as server from './../api/server';
const socket = io('ws://localhost:9093');

const MSG_LIST = 'MSG_LIST'; // 获取消息列表
const MSG_RECV = 'MSG_RECV'; // 读取信息
const MSG_READ = 'MSG_READ'; // 设为已读
const initState = {
    chatMsg: [],
    unReadNum: 0,
    users: {}
};

export function chat(state = initState, action) {
    switch (action.type){
        case MSG_LIST:
            return {...state, users: action.payload.users, chatMsg: action.payload.msg, unReadNum: action.payload.msg.filter(v=>!v.read && v.from !== action.payload.userId).length};
        case MSG_RECV:
            const n = action.payload.msg.to === action.payload.userId? 1 : 0;
            return {...state, chatMsg: [...state.chatMsg, action.payload.msg], unReadNum: state.unReadNum + n};
        case MSG_READ:
            const {from, userId} = action.payload;
            return {...state, chatMsg: state.chatMsg.map(v=>({...v, read: from === v.from? true: v.read})), unReadNum: state.unReadNum - action.payload.num};
        default:
            return state
    }
}

export function getChatList() {
    return (dispatch, getState)=>{
        server.getChatList().then((res)=>{
            console.log(res);
            console.log(getState());
            if (res.status === 200 && res.data.code === 1){
                dispatch({type: MSG_LIST, payload: {msg: res.data.data, users: res.data.users, userId: getState().user._id}})
            }
        })
    }
}

export function sendMsg(from, to, msg) {
    // 发送给服务器
    return dispatch=>{
        socket.emit('sendMsg', {from, to, msg});
    }
}

export function recvMsg() {
    return (dispatch, getState)=>{
        socket.on('recvMsg', function (data) {
            console.log('接受到：', data);
            dispatch({type: MSG_RECV, payload: {msg:data, userId: getState().user._id}})
        })
    }
}

export function readMsg(from) { // from为对方的id
    return (dispatch, getState)=>{
        const readMsgParams = {from};
        server.readMsg(readMsgParams).then((res)=>{
            const userId = getState().user._id;
            if (res.status === 200 && res.data.code === 1){
                dispatch({type: MSG_READ, payload: {from, userId, num: res.data.data.num}})
            }
        })
    }
}

