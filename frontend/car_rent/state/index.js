import {proxy} from 'valtio';

const state = proxy({
    loggedUserId:null,
})

export default state;