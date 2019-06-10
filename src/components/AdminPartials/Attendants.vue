<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
    <v-container class="primary">
        <v-data-table
                :headers="headers"
                :items="desserts"
                class="elevation-1"
        >
            <template v-slot:items="props">
                <td>{{ props.item.name }}</td>
                <td class="text-xs-right">{{ props.item.calories }}</td>
                <td class="text-xs-right">{{ props.item.fat }}</td>
                <td class="text-xs-right">{{ props.item.carbs }}</td>
                <td class="text-xs-right">{{ props.item.protein }}</td>
                <td class="text-xs-right">{{ props.item.iron }}</td>
            </template>
        </v-data-table>
    </v-container>
</template>

<script>
    export default {
        name: "Attendants",
        data() {
            return {
                headers: [
                    {text: 'NIM', value: 'nim'},
                    { text: 'Nama', value: 'name' },
                    { text: 'Prodi', value: 'prodi' },
                    { text: 'JK', value: 'gender' },
                    { text: 'TTL', value: 'pdob' },
                    { text: 'Email', value: 'email' },
                    { text: 'HP', value: 'mobile' },
                    { text: 'LINE', value: 'line' },
                ],
            }
        }
    }
</script>

<style scoped>

</style>