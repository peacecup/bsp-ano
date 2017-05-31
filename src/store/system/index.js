import {GET_USERLIST} from './config'

import axios from 'axios';

const system = {
	state :{
		userList: []
	},
	mutations: {
		GET_USERLIST(state,data){
		    state.userList = data;
		}

	},
	actions: {
		GET_USERLIST({commit},data){
			commit('GET_USERLIST',data);
		}
	},
	getters:{

	}
}

export default system;