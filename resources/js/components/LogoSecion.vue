<template>
    <v-container fluid>
            <v-flex xs12>
                    <v-layout align-center justify-space-between row fill-height wrap>
                        <div><img src="/img/asi.png"></div>
                        <div><img src="/img/dahill.png"></div>
                        <div><img src="/img/denitech.png"></div>
                        <div><img src="/img/imagetech.png"></div>
                        <div><img src="/img/onesource.png"></div>
                    </v-layout>
            </v-flex>
    </v-container>
</template>

<script>
    export default {
        name: "LogoSecion"
    }
</script>

<style scoped>
    img {
        width:90%;
    }
    .flex-container {
        flex-wrap: wrap;
    }
</style>
