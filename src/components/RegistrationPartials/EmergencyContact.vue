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
                <span class="headline font-weight-bold">Kontak darurat</span> <span class="grey--text ml-2">4/6</span>
            </div>
            <p class="mt-1 grey--text text--darken-1">Kami perlu informasi ini agar kamu aman saat keberjalanan SPARTA</p>

            <v-text-field label="Nama Wali" v-model="guardian_name" :rules="validation_rules.name" counter="50"></v-text-field>
            <v-text-field label="Hubungan Wali" v-model="guardian_rel" :rules="validation_rules.hub_wali" hint="Misalnya Ayah/Ibu/Saudara kandung/lainnya" counter="20"></v-text-field>
            <v-text-field label="Nomor Telepon Wali" v-model="guardian_mobile" :rules="validation_rules.mobile" counter="20"></v-text-field>

            <v-btn depressed block style="text-transform: none; color: black" color="primary" class="font-weight-bold mt-3" type="submit">Lanjutkan</v-btn>
        </div>
    </v-form>
</template>

<script>
    const validation_rules = require('../../validation_rules');

    export default {
        name: "EmergencyContact",
        data() {
            return {
                validation_rules: validation_rules,
                guardian_name: '',
                guardian_rel: '',
                guardian_mobile: ''
            }
        },
        methods: {
            proceed() {
                if(!this.$refs.form.validate()) return;

                this.$emit('proceed', {
                    guardian_name: this.guardian_name,
                    guardian_rel: this.guardian_rel,
                    guardian_mobile: this.guardian_mobile
                });
            }
        }
    }
</script>

<style scoped>

</style>