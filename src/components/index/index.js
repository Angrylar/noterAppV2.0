import $server from '../../server.js'
import regExp from '../../regExp.js'
export default {
	name: 'indexMain',
	data() {
		return {
			loginUserAccountNum: '',
			loginUserPassword: '',
			registeUserAccountNum: '',
			registePassword: '',
			registeRePassword: '',
			resetPasswordAccountNum: '',
			resetPasswordPassword: '',
			resetPasswordRePassword: '',
			isErr: false,
			errMsg: '',
			loginWin: true,
			registerWin: false,
			resetPasswordWin: false,
			focA: false,
			focB: false,
			focAA: false,
			focBB: false,
			focCC: false,
			focAAA: false,
			focBBB: false,
			focCCC: false,
		}
	},
	created() {
		// console.log(this.$store.state)
		// console.log(this.$store.state)
	},
	mounted() {
		const check = () => {
			console.log('check')
		}
	},
	methods: {
		errBarAnimate: function (msg) {
			this.errMsg = msg;
			this.isErr = true;
			$('.err-bar').addClass('animated fadeIn');
			// this.errAnimateClass = 'animated fadeIn';
			function setTimer(callBack) {
				setTimeout(function () {
					$('.err-bar').addClass('animated fadeOut');
					this.isErr = false;
					callBack;
				}, 1000)
			}
			function del() {
				$('.err-bar').removeClass('animated').removeClass('fadeOut').removeClass('fadeIn');
			}
			setTimer(del());
		},
		go: function (msg) {
			this.$router.push({ name: msg })
		},
		change: function (msg) {
			let vm = this;
			if (msg == 'login') {
				this.loginWin = true;
				this.registerWin = false;
				this.resetPasswordWin = false;
			} else if (msg == 'register') {
				this.loginWin = false;
				this.registerWin = true;
				this.resetPasswordWin = false;
			} else if (msg == 'resetpassword') {
				this.loginWin = false;
				this.registerWin = false;
				this.resetPasswordWin = true;
			}
		},
		check: function () {
			for (let obj of arguments) {
				if (obj.value == '') {
					this.errBarAnimate(`${obj.name}不能为空！`)
					return false;
				}

				return true;
			}
		},
		login: function () {
			const vm = this;
			let argObja = {};
			argObja.value = vm.loginUserAccountNum;
			argObja.name = '用户名';
			let argObjb = {};
			argObjb.value = vm.loginUserPassword;
			argObjb.name = '密码';
			if (vm.check(argObja, argObjb)) {
				if (vm.loginUserPassword > 5) {
					if (/^1[34578]\d{9}$/.test(vm.loginUserAccountNum)) {
						let formData = {
							accountNo: vm.loginUserAccountNum,
							password: vm.loginUserPassword
						}
						$server.login(formData)
							.then(function (resp) {
								if (resp.code == 10001) {
									console.log(`登录成功！${resp.msg}`);
									window.localStorage.setItem('loginKey', resp.result.loginKey);
									vm.$store.commit('setLoginKey', resp.result.loginKey);
									console.log(vm.$store.state.user.loginKey)
									vm.go('noteList')
								} else {
									console.log(resp)
									vm.errBarAnimate(`${resp.msg}`);
								}
							}).catch(function (err) {
								vm.errBarAnimate(`${err}`);
							})
					} else {
						vm.errBarAnimate(`请输入正确的手机号码！`);
					}
				} else {
					vm.errBarAnimate(`密码不能小于6位！`);
				}

			}
		},
		registe: function () {
			const vm = this;
			let argObja = {};
			argObja.value = vm.registeUserAccountNum;
			argObja.name = '用户名';
			let argObjb = {};
			argObjb.value = vm.registePassword;
			argObjb.name = '密码';
			let argObjc = {};
			argObjc.value = vm.registeRePassword;
			argObjc.name = '二次密码'
			if (vm.check(argObja, argObjb, argObjc)) {
				if (vm.registePassword.length > 5 && vm.registeRePassword.length > 5) {
					if (vm.registePassword == vm.registeRePassword) {
						if (/^1[34578]\d{9}$/.test(vm.registeUserAccountNum)) {
							let formData = {
								accountNo: vm.registeUserAccountNum,
								password: vm.registePassword,
								rePassword: vm.registeRePassword
							}
							$server.register(formData)
								.then(function (resp) {
									if (resp.code == 10001) {
										console.log(`注册成功！${resp.msg}`);
										// vm.go()
									} else {
										vm.errBarAnimate(`${resp.msg}`);
									}
								}).catch(function (err) {
									vm.errBarAnimate(`${err}`);
								})
						} else {
							vm.errBarAnimate(`请输入正确的手机号码！`);
						}
					} else {
						vm.errBarAnimate(`两次输入的密码不一致，请检查后再次提交！`)
					}
				} else {
					vm.errBarAnimate(`密码不能小于6位！`)
				}
			}
		},
		resetPwd: function () {
			const vm = this;
			let argObja = {};
			argObja.value = vm.resetPasswordAccountNum;
			argObja.name = '用户名';
			let argObjb = {};
			argObjb.value = vm.resetPasswordPassword;
			argObjb.name = '密码';
			let argObjc = {};
			argObjc.value = vm.resetPasswordRePassword;
			argObjc.name = '二次密码'

			if (vm.check(argObja, argObjb, argObjc)) {
				if (vm.resetPasswordPassword.length > 5 && vm.resetPasswordRePassword.length > 5) {
					if (vm.resetPasswordPassword == vm.resetPasswordRePassword) {
						if (/^1[34578]\d{9}$/.test(vm.registeUserAccountNum)) {
							let formData = {
								accountNo: vm.registeUserAccountNum,
								password: vm.resetPasswordPassword,
								rePassword: vm.resetPasswordRePassword
							}
							$server.resetPassword(formData)
								.then(function (resp) {
									if (resp.code == 10001) {
										console.log(`修改密码成功！${resp.msg}`);
										// vm.go()
									} else {
										vm.errBarAnimate(`${resp.msg}`);
									}
								}).catch(function (err) {
									vm.errBarAnimate(`${err}`);
								})
						} else {
							vm.errBarAnimate(`请输入正确的手机号码！`);
						}
					} else {
						vm.errBarAnimate(`两次输入的密码不一致，请检查后再次提交！`)
					}
				} else {
					vm.errBarAnimate(`密码不能小于6位！`)
				}
			}
		},
		resetInput: function (arg) {
			this[arg] = '';
		},

	}
}
