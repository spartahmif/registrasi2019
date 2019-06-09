<template>
    <v-form @submit.prevent="proceed" ref="form">
        <div class="pa-4" align="left">
            <v-img :src="require('../../assets/spartalogo.png')" width="80"></v-img>
            <div class="display-1 font-weight-bold" style="margin-top: 24px">Selamat datang!</div>
            <p class="mt-3">
                Kami ucapkan selamat dan sukses untuk kalian yang diterima pada program studi Teknik Informatika dan Sistem dan Teknologi Informasi angkatan 2018!
            </p>
            <p>
                Nah, kami ingin mengenal kamu lebih jauh, pertama-tama, silakan kamu masukkan NIM kamu di bawah ini.
            </p>

            <v-text-field label="NIM TPB" v-model="nim" :rules="validation_rules.nim" class="mt-4"></v-text-field>
            <v-select
                    v-model="major"
                    :items="majors"
                    :rules="validation_rules.major"
                    item-text="text"
                    item-value="value"
                    label="Program Studi"
                    return-object
            ></v-select>

            <v-btn ma-0 depressed block style="text-transform: none; color: black" color="primary" class="font-weight-bold" type="submit">Lanjutkan</v-btn>
        </div>
    </v-form>
</template>

<script>
    const validation_rules = require('../../validation_rules');

    export default {
        name: "Welcome",
        data() {
            return {
                nim: '',
                major: null,
                validation_rules: validation_rules,
                majors: [
                    {text: 'Teknik Informatika', value: 135},
                    {text: 'Sistem dan Teknologi Informasi', value: 182}
                ]
            }
        },
        methods: {
            proceed() {
                if(!this.$refs.form.validate()) return;
                this.$emit('proceed', {
                    nim: this.nim,
                    major: this.major.value
                });
            }
        }
    }
</script>

<style scoped>

</style>