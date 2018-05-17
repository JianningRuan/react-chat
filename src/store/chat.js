import io from "socket.io-client";
import * as server from './../api/server';
const socket = io('ws://localhost:9093');

const MSG_LIST = 'MSG_LIST'; // 获取消息列表
const MSG_RECV = 'MSG_RECV'; // 读取信息
const MSG_READ = 'MSG_READ'; // 设为已读
const initState = {
    chatMsg: [],
    unReadNum: 0
};

export function chat(state = initState, action) {
    switch (action.type){
        case MSG_LIST:
            return {...state, chatMsg: action.payload, unReadNum: action.payload.filter(v=>!v.read).length};
        case MSG_RECV:
            return {...state, chatMsg: [...state.chatMsg, action.payload], unReadNum: state.unReadNum + 1};
        case MSG_READ:
            return null;
        default:
            return state
    }
}

export function getChatList() {
    return dispatch=>{
        server.getChatList().then((res)=>{
            console.log(res);
            if (res.status === 200 && res.data.code === 1){
                dispatch({type: MSG_LIST, payload: res.data.data})
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
    return dispatch=>{
        socket.on('recvMsg', function (data) {
            console.log('接受到：', data);
            dispatch({type: MSG_RECV, payload: data})
        })
    }
}

