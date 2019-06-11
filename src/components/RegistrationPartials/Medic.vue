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
                <span class="headline font-weight-bold">Informasi kondisi medik</span> <span class="grey--text ml-2">3/6</span>
            </div>
            <p class="mt-1 grey--text text--darken-1">Kami perlu informasi ini agar kamu aman saat keberjalanan SPARTA</p>

            <v-select
                    v-model="blood_type"
                    :items="blood_types"
                    label="Golongan Darah"
                    :rules="validation_rules.blood_type"
            ></v-select>

            <v-textarea label="Penyakit atau Riwayat Penyakit" v-model="disease" counter="100"  :rules="validation_rules.disease"></v-textarea>

            <v-btn depressed block style="text-transform: none; color: black" color="primary" class="font-weight-bold mt-3" type="submit">Lanjutkan</v-btn>
        </div>
    </v-form>
</template>

<script>
    const validation_rules = require('../../validation_rules');

    export default {
        name: "Medic",
        data() {
            return {
                validation_rules: validation_rules,
                disease: '',
                blood_type: null,
                blood_types: ['A', 'B', 'AB', 'O']
            }
        },
        methods: {
            proceed() {
                if(!this.$refs.form.validate()) return;

                this.$emit('proceed', {
                    disease: this.disease,
                    blood_type: this.blood_type
                });
            }
        }
    }
</script>

<style scoped>

</style>