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
                <span class="headline font-weight-bold">Persetujuan Penyebaran Data</span> <span class="grey--text ml-2">6/6</span>
            </div>
            <p class="mt-3">Sebagai informasi, banyak sekali perusahaan-perusahaan eksternal yang sangat antusias untuk bekerja sama dengan HMIF mulai dari membuat seminar hingga membuka lowongan pekerjaan.</p>
            <p>HMIF mencoba memfasilitasi hal tersebut dengan mendata informasi kontak anggotanya dan memberikannya kepada pihak-pihak tersebut. Di sisi lain, informasi kontak merupakan data pribadi yang harus dijaga kerahasiaannya.</p>
            <p>Untuk menghargai hal tersebut, HMIF ingin meminta persetujuan Saudara untuk menyebarkan data pribadi Saudara—termasuk tetapi tidak terbatas pada, nama lengkap, nomor ponsel, alamat e-mail, akun LinkedIn, dan akun GitHub—kepada pihak-pihak yang bekerjasama dengan HMIF.</p>
            <p>Centang kotak di bawah ini apabila Saudara setuju untuk disebarkan datanya, atau biarkan saja bila tidak setuju.</p>

            <v-divider></v-divider>

            <v-checkbox v-model="consent" label="Saya setuju data saya disebarkan"></v-checkbox>

            <v-btn depressed block style="text-transform: none; color: black" color="primary" class="font-weight-bold mt-3" type="submit">Lanjutkan</v-btn>
        </div>
    </v-form>
</template>

<script>
    export default {
        name: "InformationConsent",
        data() {
            return {
                consent: false
            }
        },
        methods: {
            proceed() {
                this.$emit('proceed', {
                    consent: this.consent
                });
            }
        }
    }
</script>

<style scoped>

</style>