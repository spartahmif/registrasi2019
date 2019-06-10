<template>
    <v-form @submit.prevent="proceed" ref="form">
        <div class="pa-4" align="left">
            <div class="display-1 font-weight-bold">Selamat datang di SPARTA 2018!</div>
        </div>
        <v-img :src="require('../../assets/endregards.jpg')"></v-img>
        <div class="pa-4" align="left">
            <p>
                Perjalanan kalian masih panjang, jangan menyerah dan teruslah berkarya dan berkontribusi!
            </p>
            <p>
                Kamu boleh menutup laman ini.
            </p>
        </div>
    </v-form>
</template>

<script>
    export default {
        name: "Finished"
    }
</script>

<style scoped>

</style>