import $server from '../../server.js'
export default {
    name: 'noteList',
    data() {
        return {
            listArr: [],
            currentPage: '1',
            tottlePage: '1',
            loadingShow: true,
            loadingMsg: '加载中...',
        }
    },
    computed() {

    },
    created() {
        const vm = this;

        const getNoteListFunc = () => {
            let param = {
                loginKey: vm.$store.state.user.loginKey
            }
            $server.getNoteList(param)
                .then(function (resp) {
                    console.log(resp)
                    if (resp.code == 10001) {
                        if (resp.result.resultList.length == 0) {
                            console.log('sdf')
                            vm.loadingShow = true;
                            vm.loadingMsg = '您还没有笔记，快快开始添加笔记吧！';
                        } else {
                            vm.loadingShow = false;
                            vm.noteList = (resp.result.resultList);
                            vm.tottlePage = resp.result.page.tottlePage;
                            vm.currentPage = resp.result.page.currentPage;
                        }
                    } else if (resp.code == 10003) {
                        vm.$store.commit('setLoginKey', '');
                        console.log('123')
                        vm.$router.push({
                            name: 'login'
                        })
                    }
                    vm.listArr = resp.result.resultList;
                }).catch(function (err) {
                    console.log(err);
                })
        }
        getNoteListFunc();
    },
    mounted() {
        const vm = this;
        function getNoteListFunction(page) {
            // console.log(page)
            if (vm.currentPage > vm.tottlePage) {
                vm.currentPage = parseInt(vm.tottlePage);
            } else {
                let param = {
                    loginKey: vm.$store.state.user.loginKey,
                    page: page
                }
                $server.getNoteList(param)
                    .then(function (resp) {
                        if (resp.code == 10001) {
                            if (resp.result.resultList.length == 0) {
                                vm.loadingShow = true;
                                vm.loadingMsg = '您还没有笔记，快快开始添加笔记吧！';
                            } else {
                                vm.loadingShow = false;
                                vm.listArr = vm.listArr.concat(resp.result.resultList);
                                vm.tottlePage = resp.result.page.tottlePage;
                                vm.currentPage = resp.result.page.currentPage;
                            }
                        }
                    }).catch(function (err) {
                        console.log(err);
                    })
            }

        }

        $('.note-list-content').on('scroll', function () {
            if (($('.note-list-content ul').height() - $('.note-list-content').height()) <= $('.note-list-content').scrollTop()) {
                vm.currentPage = 1 + parseInt(vm.currentPage);
                getNoteListFunction(vm.currentPage);
                vm.loadingShow = true;
                vm.loadingMsg = '我是有底线的';
            } else {
                vm.loadingShow = false;
            }
        })
    },
    methods: {
        getMoreMsg: function () {

        },
        go: function (code) {
            window.sessionStorage.setItem('nid', code);
            this.$store.commit('currentNoteId', code);
			this.$router.push({ name: 'noteDetail' })
		},
        newNote: function () {
            this.commit('setNoteState', 'new');
            this.$router.push({ name: 'edit' });
        }
    }
}