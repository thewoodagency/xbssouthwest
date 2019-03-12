<template>
    <v-footer dark class="pa-3 p-3" height="auto">
        <v-flex xs2></v-flex>
        <v-flex xs8>
        <img src="/img/footerlogo.png">
        <v-spacer></v-spacer>
        <div class="copyright" align="right">&copy; {{ new Date().getFullYear() }} Xerox Business Solutions Southwest. All rights reserved.
            <br>Privacy Policy   |   Terms & Conditions</div>
        </v-flex>
        <v-flex xs2></v-flex>
    </v-footer>
</template>

<script>
    export default {
        name: "AppFooter"
    }
</script>

<style scoped>
    .copyright { margin-top:-20px }
    @media only screen and (max-width: 960px) {
        .copyright { margin-top: 20px }
    }

</style>
