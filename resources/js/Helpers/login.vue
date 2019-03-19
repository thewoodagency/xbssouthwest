<template>
    <v-container>
        <v-layout row fill-height>
            <v-flex xs2></v-flex>
            <v-flex xs8 style="padding: 100px 0">
                <h1>Admin Login</h1>
                <v-form @submit.prevent="login" v-model="valid" ref="form">
                    <v-text-field
                            v-model="form.email"
                            label="Admin E-mail"
                            required
                            type="email"
                    ></v-text-field>

                    <v-text-field
                            v-model="form.password"
                            label="Password"
                            type="password"
                            required
                    ></v-text-field>

                    <v-btn type="submit" color="green">Login</v-btn>
                    <v-btn @click="clear">clear</v-btn>
                </v-form>
            </v-flex>
            <v-flex xs2></v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    export default {
        name: "Login",
        data() {
            return {
                form: {
                    email: 'admin@xbssouthwest.com',
                    password: ''
                },
                message: '',
                valid: true
            }
        },
        created() {
            if(User.loggedIn()) {
                this.$router.push({name:'questions'});
            }
        },
        methods: {
            login() {
                User.login(this.form);
                //this.$router.push({name:'questions'});
            },
            clear() {}

        }
    }
</script>

<style scoped>

</style>
