<template>
    <v-layout align-center justify-space-between row fill-height>
        <div><a href="https://www.asibiz.com/" target="_blank"><img src="/img/asi.png"></a></div>
        <div><a href="http://www.dahill.com/" target="_blank"><img src="/img/dahill.png"></a></div>
        <div><a href="https://denitech.com/" target="_blank"><img src="/img/denitech.png"></a></div>
        <div><a href="https://imagetekos.com/" target="_blank"><img src="/img/imagetech.png"></a></div>
        <div><a href="http://www.youronesource.com/" target="_blank"><img src="/img/onesource.png"></a></div>
    </v-layout>
</template>

<script>
    export default {
        name: "LogoSecion"
    }
</script>

<style scoped>
    div {
        margin: 0 auto;
        padding: 10px 0
    }

    img {
        width: 88%;
    }

    @media (min-width: 600px) and (max-width: 1024px) {
        img {
            width: 80%;
        }
    }

    @media only screen and (max-width: 600px) {
        img {
            width: 90%;
        }

        div {
            text-align: center
        }
    }
</style>
