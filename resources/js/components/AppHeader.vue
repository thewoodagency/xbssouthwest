<template>
    <nav>
        <v-layout class="pa-3 p-3" height="auto" wrap>
            <v-flex xs0 md2></v-flex>
            <v-flex xs12 md4>
                <img class="mainlogo" src="/img/logo.png">
            </v-flex>
            <v-flex xs12 md4>
                <div class="xsphone" align="right">XBSsupport@xerox.com | 210-805-9750</div>
            </v-flex>
            <v-flex xs0 md2></v-flex>
        </v-layout>

        <v-parallax
                dark
                src="./img/header.jpg"
                height="auto"
        >
            <v-layout
                    row
                    padding="30px"

            >
                <v-flex xs2>
                </v-flex>
                <v-flex xs8>
                    <div class="py-5">
                        <p class="display-2 font-weight-thin text-uppercase">not just a name change.</p>
                        <p class="display-3 font-weight-black text-uppercase mb-3">a game changer.</p>
                        <p class="title">Same great people.</p>
                        <p class="title">Same great products.</p>
                        <p class="title">New business-changing solutions.</p>
                    </div>
                </v-flex>
                <v-flex xs2>
                </v-flex>

            </v-layout>
        </v-parallax>
    </nav>
</template>
<script>
    export default {
        name: "header"
    }
</script>

<style scoped>
    p {
        padding: 0;
        margin: 0;
    }
    .display-3 {
        margin-top: -15px;
        line-height: 0;
    }

    .title {
        margin-bottom: 10px;
    }

    @media (min-width: 960px) {
        .xsphone {
            margin-top: 50px;
        }
    }

    @media only screen and (max-width: 960px) {
        .xsphone {
            margin-top: 0;
        }
        .mainlogo {
            width: 50%;
        }
    }
</style>
