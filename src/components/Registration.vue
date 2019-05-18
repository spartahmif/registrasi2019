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
    export default {
        name: "Registration",
        components: {Preferences, Finished, InformationConsent, EmergencyContact, Medic, Contact, Biodata, Welcome},
        data() {
            return {
                tab: 0,
                data: {}
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
                this.tab = 7;
            }
        }
    }
</script>

<style scoped>
    #login-box {
        max-width: 400px;
    }
</style>