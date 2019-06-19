<template>
    <v-container bg fill-height grid-list-md flex class="primary">
        <v-layout row wrap align-center>
            <v-flex>
                <div align="center">
                    <v-card id="login-box" elevation="4">
                        <div class="pa-4" align="left">
                            <v-img :src="require('../assets/logo-sparta18.svg')" width="80"></v-img>
                            <div class="display-1 font-weight-bold" style="margin-top: 24px">Pendaftaran ditutup :(</div>
                            <p class="mt-3">
                                Pendaftaran SPARTA 2018 sudah ditutup. Kalo kamu sudah daftar, bagus. Kalau belum.. ya....
                            </p>
                            <p>Apabila kamu punya pertanyaan, silakan hubungi <a href="mailto:hmif.sparta@gmail.com">hmif.sparta@gmail.com</a>.</p>
                        </div>
                        <v-img src="https://media.giphy.com/media/l3q2Kgm3KOBUE6wF2/giphy.gif"></v-img>
                    </v-card>
                </div>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>

    export default {
        name: "Closed",
    }
</script>

<style scoped>
    #login-box {
        max-width: 400px;
    }
</style>