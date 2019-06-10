<template>
    <v-container bg fill-height grid-list-md flex class="primary">
        <v-layout row wrap align-center>
            <v-flex>
                <div align="center">
                    <v-card id="login-box" elevation="4" class="pa-3">
                        <v-img :src="require('../../assets/logo-sparta18.svg')" width="80"></v-img>
                        <div class="headline font-weight-bold" style="margin-top: 24px; margin-bottom: 24px;">Hackerman Login</div>
                        <v-text-field label="Username" v-model="username"></v-text-field>
                        <v-text-field label="Password" type="password" v-model="password"></v-text-field>
                        <v-btn block depressed color="primary" @click.prevent="login">Login</v-btn>
                    </v-card>
                </div>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    export default {
        name: "Login",
        data() {
            return {
                username: '',
                password: ''
            }
        },
        methods: {
            login() {
                this.$emit('login', {
                    username: this.username,
                    password: this.password
                });
            }
        }
    }
</script>

<style scoped>
    #login-box {
        max-width: 400px;
    }
</style>