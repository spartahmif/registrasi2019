<template>
    <v-container bg fill-height grid-list-md flex class="primary">
        <v-layout row wrap align-center>
            <v-flex>
                <div align="center">
                    <v-card id="login-box" elevation="4">
                        <v-tabs-items v-model="tab" touchless>
                            <v-tab-item :transition="false" :reverse-transition="false">
                                <Welcome v-on:proceed="welcome_proceed"></Welcome>
                            </v-tab-item>
                            <v-tab-item :transition="false" :reverse-transition="false">
                                <Biodata v-on:previous="go_back" v-on:proceed="biodata_proceed" :nim="data.nim"></Biodata>
                            </v-tab-item>
                            <v-tab-item :transition="false" :reverse-transition="false">
                                <Contact v-on:previous="go_back" v-on:proceed="contact_proceed"></Contact>
                            </v-tab-item>
                            <v-tab-item :transition="false" :reverse-transition="false">
                                <Medic v-on:previous="go_back" v-on:proceed="medic_proceed"></Medic>
                            </v-tab-item>
                            <v-tab-item :transition="false" :reverse-transition="false">
                                <EmergencyContact v-on:previous="go_back" v-on:proceed="ec_proceed"></EmergencyContact>
                            </v-tab-item>
                            <v-tab-item :transition="false" :reverse-transition="false">
                                <Preferences v-on:previous="go_back" v-on:proceed="preference_proceed"></Preferences>
                            </v-tab-item>
                            <v-tab-item :transition="false" :reverse-transition="false">
                                <InformationConsent v-on:previous="go_back" v-on:proceed="consent_proceed"></InformationConsent>
                            </v-tab-item>
                            <v-tab-item :transition="false" :reverse-transition="false">
                                <Finished></Finished>
                            </v-tab-item>
                        </v-tabs-items>
                    </v-card>
                </div>
            </v-flex>
        </v-layout>
        <v-dialog v-model="dialog" persistent width="300">
            <v-card color="primary">
                <v-card-text>
                    Harap tunggu, kami sedang mempersiapkan keajaiban osjur..
                    <v-progress-linear
                            indeterminate
                            color="black"
                            class="mb-0"
                    ></v-progress-linear>
                </v-card-text>
            </v-card>
        </v-dialog>
        <v-snackbar v-model="snackbar" top>
            {{ snackbar_text }}
            <v-btn color="pink" flat @click="snackbar = false">
                Close
            </v-btn>
        </v-snackbar>
    </v-container>
</template>

<script>
    import Welcome from "./RegistrationPartials/Welcome";
    import Biodata from "./RegistrationPartials/Biodata";
    import Contact from "./RegistrationPartials/Contact";
    import Medic from "./RegistrationPartials/Medic";
    import EmergencyContact from "./RegistrationPartials/EmergencyContact";
    import InformationConsent from "./RegistrationPartials/InformationConsent";
    import Finished from "./RegistrationPartials/Finished";
    import Preferences from "./RegistrationPartials/Preferences";

    const axios = require('axios');
    const BASE_URL = 'https://regissparta2019.herokuapp.com';

    export default {
        name: "Registration",
        components: {Preferences, Finished, InformationConsent, EmergencyContact, Medic, Contact, Biodata, Welcome},
        data() {
            return {
                tab: 0,
                data: {},
                dialog: false,
                snackbar: false,
                snackbar_text: ''
            }
        },
        methods: {
            go_back() {
                if(this.tab > 0) this.tab--;
            },
            welcome_proceed(data) {
                this.data = {...this.data, ...data};
                this.tab = 1;
            },
            biodata_proceed(data) {
                this.data = {...this.data, ...data};
                this.tab = 2;
            },
            contact_proceed(data) {
                this.data = {...this.data, ...data};
                this.tab = 3;
            },
            medic_proceed(data) {
                this.data = {...this.data, ...data};
                this.tab = 4;
            },
            ec_proceed(data) {
                this.data = {...this.data, ...data};
                this.tab = 5;
            },
            preference_proceed(data) {
                this.data = {...this.data, ...data};
                this.tab = 6;
            },
            consent_proceed(data) {
                this.data = {...this.data, ...data};
                this.dialog = true;
                this.submit_form(this.data).then(() => {
                    this.dialog = false;
                    this.tab = 7;
                }).catch((e) => {
                    this.dialog = false;
                    this.show_snackbar("Wah servernya lagi ngambek, coba lagi ya :)");
                    console.log(e);
                })
            },
            submit_form: async function(data) {
                let response = await axios.post(`${BASE_URL}/api/v1/students/`, data);
                if(response.status !== 200)
                    throw response.data;
            },
            show_snackbar(text) {
                this.snackbar = true;
                this.snackbar_text = text;
            }
        }
    }
</script>

<style scoped>
    #login-box {
        max-width: 400px;
    }
</style>