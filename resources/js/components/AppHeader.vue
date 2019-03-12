<template>
    <nav>
        <v-layout class="pt-3" height="auto" wrap>
            <v-flex xs0 md2></v-flex>
            <v-flex xs12 md4>
                <img class="mainlogo" src="/img/logo.png">
            </v-flex>
            <v-flex xs12 md4>
                <div class="xsphone" align="right"><a href="mailto:XBSsupport@xerox.com">XBSsupport@xerox.com</a> | 210-805-9750</div>
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
                    <div class="py-5 pl-sm-0 smtext">
                        <p class="display-2 font-weight-thin text-uppercase">not just a name change.</p>
                        <p class="display3 text-uppercase mb-3">a game changer.</p>
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
    .display3 {
        line-height: 50px;
        font-size: 60px;
        font-weight: 900;
    }

    .title {
        margin-bottom: 10px;
    }

    @media (min-width: 960px) {
        .xsphone {
            margin-top: 40px;
        }
    }

    @media only screen and (max-width: 960px) {
        .xsphone {
            margin-top: 0;
        }
        .mainlogo {
            width: 50%;
        }
        .smtext {
            margin-left:-20px;
        }
    }
</style>
