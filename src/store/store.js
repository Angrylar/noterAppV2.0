import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios'
import router from '../router/index.js'
Vue.use(Vuex);

const store = new Vuex.Store({
	state: {
		loginKey: localStorage.getItem('loginKey') ? localStorage.getItem('loginKey') : '',
		userNickName: '',
		registerAccountNum: '',
		loginErrMsg: '',
		nid: sessionStorage.getItem('currentNid') ? sessionStorage.getItem('currentNid') : '',
		currentTittle: '',
		currentContent: '',
		lastPage: sessionStorage.getItem('lastPage') ? sessionStorage.getItem('lastPage') : 'index',
		nickName: ''
	},
	mutations: {
		setLoginKey(state, msg) {
			state.loginKey = msg;
		},
		setNickName(state, msg) {
			state.nickName = msg;
		},
		loginMsg(state, msg) {
			state.loginAccountNum = msg.loginAccountNum;
			state.loginPassword = msg.loginPassword;
		},
		setLoginErrMsg(state, msg) {
			state.loginErrMsg = msg;
		},
		setNid(state, msg) {
			state.nid = msg;
		},
		setCurrentNote(state, msg) {
			if (msg) {
				let obj = JSON.parse(msg);
				state.currentTittle = obj.tittle;
				state.currentContent = obj.content;
			} else {
				state.currentTittle = '';
				state.currentContent = '';
			}
		},
		setLastPage(state, msg) {
			state.lastPage = msg;
		}
	},
	actions: {
		loginFunction(context) {
			context.commit('setLoginKey', '123123123')
			axios({
				method: "POST",
				url: baseUrl.BASEAPI + 'note/login',
				data: {
					accountNo: context.state.loginAccountNum,
					password: context.state.loginPassword
				}
			}).then(function (resp) {
				if (resp.data.code == 10001) {
					context.commit('setLoginKey', resp.data.result.loginKey);
					location.href = '#/index';
				} else {
					context.commit('setLoginErrMsg', resp.data.msg)
					console.log(resp.data.msg)
				}
			}.bind(this)).catch(function (err) {
				console.log(err);
			}.bind(this));
		},
		go(url) {
			window.location.href = url;
		}
	}
});

export default store
