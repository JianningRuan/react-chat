import { get, post } from './config';
import * as url from './urlApi';

export function getUserInfo(){
    return get(url.userInfo);
}
export function login(params) {
    return post(url.login, params);
}
export function register(params) {
    return post(url.register, params);
}
export function updateInfo(params) {
    return post(url.updateInfo, params);
}
export function userList(params) {
    return get(url.userList, params);
}
export function getChatList(params) {
    return get(url.chatList, params);
}