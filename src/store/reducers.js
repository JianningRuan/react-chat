import { combineReducers } from 'redux';

import { user } from './user';
import { chatUser } from './chatUser';
import { chat } from "./chat";

export default combineReducers({
    user,
    chatUser,
    chat
})