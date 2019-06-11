<template>
    <v-form @submit.prevent="proceed" ref="form">
        <div class="pl-3 pt-4 pr-3 pb-1" align="left">
            <v-btn small flat class="pa-0 ma-0 text-none" color="blue darken-1" @click="$emit('previous')">
                <v-icon small class="mr-2">arrow_back</v-icon>
                Kembali
            </v-btn>
        </div>
        <div class="pl-4 pr-4 pt-1 pb-4" align="left">
            <div>
                <span class="headline font-weight-bold">Informasi kontak</span> <span class="grey--text ml-2">2/6</span>
            </div>
            <p class="mt-1 grey--text text--darken-1">Isi data diri kamu dengan jujur ya..</p>

            <v-text-field label="Alamat email" :rules="validation_rules.email" v-model="email" counter="30"></v-text-field>
            <v-text-field label="ID LINE" :rules="validation_rules.line_id" v-model="line" counter="30"></v-text-field>
            <v-text-field label="Nomor ponsel" :rules="validation_rules.mobile" v-model="mobile" counter="20"></v-text-field>
            <v-text-field label="Alamat Rumah" :rules="validation_rules.address" v-model="address_home" counter="100"></v-text-field>
            <v-text-field label="Alamat di Bandung" :rules="validation_rules.address" v-model="address_local" counter="100"></v-text-field>

            <v-btn depressed block style="text-transform: none; color: black" color="primary" class="font-weight-bold mt-3" type="submit">Lanjutkan</v-btn>
        </div>
    </v-form>
</template>

<script>
    const validation_rules = require('../../validation_rules');

    export default {
        name: "Contact",
        data() {
            return {
                validation_rules: validation_rules,
                email: '',
                line: '',
                mobile: '',
                address_home: '',
                address_local: ''
            }
        },
        methods: {
            proceed() {
                if(!this.$refs.form.validate()) return;
                this.$emit('proceed', {
                    email: this.email,
                    line: this.line,
                    mobile: this.mobile,
                    address_home: this.address_home,
                    address_local: this.address_local
                });
            }
        }
    }
</script>

<style scoped>

</style>