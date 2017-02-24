import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

var state = {
	show: false
};

const mutations = {
	showLogin(state) { //处理状态(数据)变化
		state.show = true;
	},
	hideLogin(state) {
		state.show = false;
	}
};

const actions = {
	showLogin: ({ //处理你要干什么，异步请求，判断，流程控制
		commit
	}) => {
		showLogin('increment')
	}
};

const getters = {
	count(state) {
		return state.count;
	},
	getOdd(state) {
		return state.count % 2 == 0 ? '偶数' : '奇数';
	}
};


//需要导出Store对象
export default new Vuex.Store({
	state,
	mutations,
	actions,
	getters
});