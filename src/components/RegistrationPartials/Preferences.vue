<template>
    <v-form @submit.prevent="proceed">
        <div class="pl-3 pt-4 pr-3 pb-1" align="left">
            <v-btn small flat class="pa-0 ma-0 text-none" color="blue darken-1" @click="$emit('previous')">
                <v-icon small class="mr-2">arrow_back</v-icon>
                Kembali
            </v-btn>
        </div>
        <div class="pl-4 pr-4 pt-1 pb-4" align="left">
            <div>
                <span class="headline font-weight-bold">Preferensi materi</span> <span class="grey--text ml-2">5/6</span>
            </div>
            <p class="mt-1 grey--text text--darken-1">Kami ingin tahu materi apa yang kamu inginkan di SPARTA. Boleh memilih lebih dari satu.</p>

            <v-list
                    subheader
                    three-line
            >
                <v-list-tile>
                    <v-list-tile-action>
                        <v-checkbox
                                v-model="chk_berkemahasiswaan"
                        ></v-checkbox>
                    </v-list-tile-action>

                    <v-list-tile-content @click.prevent="chk_berkemahasiswaan = !chk_berkemahasiswaan">
                        <v-list-tile-title>Berkemahasiswaan</v-list-tile-title>
                        <v-list-tile-sub-title>Pemaparan tentang keorganisasian di luar HMIF, misalnya Kabinet KM ITB dan unit</v-list-tile-sub-title>
                    </v-list-tile-content>
                </v-list-tile>

                <v-divider></v-divider>

                <v-list-tile>
                    <v-list-tile-action>
                        <v-checkbox v-model="chk_karya"></v-checkbox>
                    </v-list-tile-action>

                    <v-list-tile-content @click.prevent="chk_karya = !chk_karya">
                        <v-list-tile-title>Karya</v-list-tile-title>
                        <v-list-tile-sub-title>Pada materi ini kamu akan diberikan materi mengenai semangat berkarya</v-list-tile-sub-title>
                    </v-list-tile-content>
                </v-list-tile>

                <v-divider></v-divider>

                <v-list-tile>
                    <v-list-tile-action>
                        <v-checkbox v-model="chk_komunikasi"></v-checkbox>
                    </v-list-tile-action>

                    <v-list-tile-content @click.prevent="chk_komunikasi = !chk_komunikasi">
                        <v-list-tile-title>Komunikasi</v-list-tile-title>
                        <v-list-tile-sub-title>Pada materi ini kamu akan diajarkan tentang komunikasi efektif</v-list-tile-sub-title>
                    </v-list-tile-content>
                </v-list-tile>
            </v-list>

            <v-divider></v-divider>
            <v-textarea box v-model="materi_others" label="Lainnya" class="mt-4" hint="Saran materi lain mungkin?" persistent-hint height="80" counter="100"  :rules="validation_rules.materi_others"></v-textarea>

            <v-btn depressed block style="text-transform: none; color: black" color="primary" class="font-weight-bold mt-3" type="submit">Lanjutkan</v-btn>
        </div>
    </v-form>
</template>

<script>
    const validation_rules = require('../../validation_rules');

    export default {
        name: "Preferences",
        data() {
            return {
                validation_rules: validation_rules,
                chk_berkemahasiswaan: false,
                chk_karya: false,
                chk_komunikasi: false,
                materi_others: ''
            }
        },
        methods: {
            proceed() {
                this.$emit('proceed', {
                    chk_berkemahasiswaan: this.chk_berkemahasiswaan,
                    chk_karya: this.chk_karya,
                    chk_komunikasi: this.chk_komunikasi,
                    materi_others: this.materi_others
                });
            }
        }
    }
</script>

<style scoped>

</style>