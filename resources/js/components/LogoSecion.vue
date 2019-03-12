<template>
                    <v-layout align-center justify-space-between row fill-height >
                        <div><img src="/img/asi.png"></div>
                        <div><img src="/img/dahill.png"></div>
                        <div><img src="/img/denitech.png"></div>
                        <div><img src="/img/imagetech.png"></div>
                        <div><img src="/img/onesource.png"></div>
                    </v-layout>
</template>

<script>
    export default {
        name: "LogoSecion"
    }
</script>

<style scoped>
    div { margin: 0 auto; padding: 10px 0 }
    img {
        width:90%;
    }

    @media (min-width: 600px) and (max-width: 1024px) {
        img { width: 80%; }
    }

    @media only screen and (max-width: 600px) {
        img { width: 90%; }
        div { text-align: center}
    }
</style>
