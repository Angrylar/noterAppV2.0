import $server from '../../server.js';
export default {
    data() {
        return {
            title: '',
            content: ''
        }
    },
    created() {
        const vm = this;

        console.log(vm.$store.state.noter.noteId)
        if (vm.$store.state.noter.noteState == "edit") {
            let param = {
                loginKey: vm.$store.state.user.loginKey,
                nid: vm.$store.state.noter.noteId
            }
            $server.getPreviewInfo(param)
                .then(function(resp) {
                    if (resp.code == 10001) {
                        vm.title = resp.result.tittle;
                        vm.content = resp.result.content;
                    } else {
                        console.log(vm.content);
                    }
                }).catch(function (err) {
                    console.log(err)
                })
        } else if (vm.$store.noter.noteState == "new") {

        }
    },
    mounted() {

    },
    methods: {
        goback: function () {
            this.$router.back();
        }
    }
}