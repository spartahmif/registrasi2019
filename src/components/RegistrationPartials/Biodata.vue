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
                <span class="headline font-weight-bold">Data diri</span> <span class="grey--text ml-2">1/6</span>
            </div>
            <p class="mt-1 grey--text text--darken-1">Isi data diri kamu dengan jujur ya..</p>

            <v-text-field label="Nama Lengkap" v-model="name" :rules="validation_rules.name" hint="Tulis dengan huruf kapital di awal kata dan kapitalisasi yang sesuai"></v-text-field>
            <v-text-field label="Nama Panggilan" v-model="nickname" :rules="validation_rules.name"></v-text-field>
            <v-select
                    v-model="gender"
                    :items="genders"
                    :rules="validation_rules.gender"
                    item-text="text"
                    item-value="value"
                    label="Jenis Kelamin"
                    return-object
            ></v-select>
            <v-text-field label="Tempat Lahir" :rules="validation_rules.bp" v-model="birth_place"></v-text-field>
            <v-text-field label="Tanggal Lahir" :rules="validation_rules.bd" v-model="birth_date" mask="##/##/####" placeholder="dd/mm/yyyy"></v-text-field>

            <v-btn depressed block style="text-transform: none; color: black" color="primary" class="font-weight-bold mt-3" :loading="loading" type="submit">Lanjutkan</v-btn>
        </div>
    </v-form>
</template>

<script>
    import stdlist from '../../assets/data/stei18';
    const validation_rules = require('../../validation_rules');
    export default {
        name: "Biodata",
        props: ["nim"],
        data() {
            return {
                validation_rules: validation_rules,
                nickname: '',
                gender: null,
                birth_place: '',
                birth_date: '',
                loading: false,
                genders: [
                    {text: 'Laki-laki', value: 0},
                    {text: 'Perempuan', value: 1}
                ]
            }
        },
        computed: {
            name() {
                return stdlist[this.nim] || '';
            }
        },
        methods: {
            proceed() {
                if(!this.$refs.form.validate()) return;
                this.$emit('proceed', {
                    name: this.name,
                    nickname: this.nickname,
                    gender: this.gender.value,
                    birth_place: this.birth_place,
                    birth_date: this.birth_date
                });
            }
        }
    }
</script>

<style scoped>

</style>