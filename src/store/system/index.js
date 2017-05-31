import {GET_USERLIST} from './config'

import axios from 'axios';	
import userListData from './mock';
import userData from './mock';

const system = {
	state :{
		userList: [],
		cur_node:{
			role: []
		}
	},
	mutations: {
		GET_USERLIST(state,data){
		    state.userList = data;
		},
		SET_CURRENT_NODE(state,data){
			state.cur_node = data;
		}
	},
	actions: {
		GET_USERLIST({commit}){
		    axios.get('/static/userList.json')
		    .then(function(res){
		  	    commit('GET_USERLIST',res.data.userList);
			})
		},
		SET_CURRENT_NODE({commit},id){
			axios.get('/user/getUserById')
		    .then(function(res){
		  	    commit('SET_CURRENT_NODE',res.data);
			})
			/*var data = { id: 4, userName: "奥巴马", loginName: "cn", loginPw: "123456", org: '1', role: ["A1","A2"], state: "1" };
			commit('SET_CURRENT_NODE',data);*/
		}
	},
	getters:{

	}
}

export default system;