import { combineReducers } from 'redux';

import { user } from './user';
import { chatUser } from './chatUser';

export default combineReducers({
    user,
    chatUser
})