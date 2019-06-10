<template>
    <Login v-on:login="login" v-if="!logged_in"></Login>
</template>

<script>
    import Login from "./AdminPartials/Login";
    export default {
        name: "Admin",
        components: {Login},
        data() {
            return {
                username: '',
                password: '',
                logged_in: false
            }
        },
        methods: {
            login(data) {
                this.logged_in = true;
                this.username = data.username;
                this.password = data.password;
            }
        }
    }
</script>

<style scoped>

</style>