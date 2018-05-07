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