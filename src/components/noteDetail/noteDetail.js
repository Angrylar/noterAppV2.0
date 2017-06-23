import $server from '../../server.js';
export default {
    name: 'noteDetail',
    data() {
        return {
            title: '',
            content: '',
        }
    },
    created() {
        const vm = this;
        let param = {
            loginKey: vm.$store.state.user.loginKey,
            nid: vm.$store.state.noter.noteId
        }
        $server.getPreviewInfo(param)
            .then(function (resp) {
                console.log(resp);
                if (resp.code == 10001) {
                    vm.title = resp.result.tittle;
                    vm.content = resp.result.content;
                } else {
                    console.log(`${resp.code}:${resp.msg}`);
                }
            }).catch(function (err) {
                console.log(err);
            })
    },
    mounted() {

    },
    methods: {
        goback: function () {
            this.$router.back()
        },
        edit: function () {
            this.commit('setNoteState', 'edit');
            this.$router.push({ name: 'edit' });
        }
    }
}