<template>
    <v-container>
        <v-layout row>
            <v-flex xs2></v-flex>
            <v-flex xs8>
                <h1>Admin Login</h1>
                <form @submit.prevent="submit">
                    <v-text-field
                            v-model="form.email"
                            :error-messages="emailErrors"
                            label="Admin E-mail"
                            required
                            @input="$v.email.$touch()"
                            @blur="$v.email.$touch()"
                            type="email"
                    ></v-text-field>

                    <v-text-field
                            v-model="form.password"
                            :rules="nameRules"
                            label="Password"
                            type="password"
                            required
                    ></v-text-field>


                    <v-btn @click="submit" color="green">Login</v-btn>
                    <v-btn @click="clear">clear</v-btn>
                </form>
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
                    email: '',
                    password: ''
                }
            }
        },
        methods: {
            submit() {
                axios.post('/api/auth/login', this.form)
                    .then(res => console.log(res.data))
                    .error(error => console.log(error.response.data))
            }
        }
    }
</script>

<style scoped>

</style>
