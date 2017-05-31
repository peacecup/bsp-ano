import Vue from 'vue';
import Vuex from 'vuex';

import system from "./system/index";


Vue.use(Vuex);


var store = new Vuex.Store({
	modules:{
		system: system
	}
})

export default store;