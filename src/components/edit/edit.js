export default {
    data() {
        return {
            content: 'kjsdfhakslhfksjadlalskjd'
        }
    },
    created() {
        const vm = this;
        if (vm.$store.noter.noteState == "edit") {

        } else if (vm.$store.noter.noteState == "") {

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