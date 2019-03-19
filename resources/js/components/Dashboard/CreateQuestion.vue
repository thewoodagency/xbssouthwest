<template>
    <v-container>
        <v-layout row>
            <v-flex xs2></v-flex>
            <v-flex xs8>
                <h1>Add Question</h1>
                <v-form @submit.prevent="add" v-model="valid" ref="form">
                    <v-text-field
                            v-model="form.title"
                            label="Question"
                            required
                            type="text"
                            :rules="nameRules"
                    ></v-text-field>

                    <markdown-editor v-model="form.body">Answer Here</markdown-editor>
                    <v-btn type="submit" color="green">Add</v-btn>
                    <v-btn @click="cancel">Cancel</v-btn>
                    <v-alert
                            :value="errors"
                            color="error"
                            icon="warning"
                            outline
                    >
                        {{ errors }} Please <a href="/logout" class="alert-warning">login</a> again.
                    </v-alert>
                </v-form>
            </v-flex>
            <v-flex xs2></v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    import markdownEditor from 'vue-simplemde/src/markdown-editor'

    export default {
        name: "CreateQuestion",
        components: {
            markdownEditor
        },
        data() {
            return {
                form: {
                    title: '',
                    body: 'Answer here...',
                    user_id: 14,
                    category_id: 1
                },
                valid: true,
                errors: '',
                nameRules: [
                    v => !!v || 'This field is required'
                ],
            }
        },
        methods: {
            add() {
                if (this.valid) {
                    axios.post('/api/questions', this.form)
                        .then(res => this.$router.push({name: 'questions'}))
                        .catch(error => this.errors = error.response.data.error);
                }
            },
            cancel() {
                this.$router.push({name: 'questions'});
            }
        }
    }
</script>

<style scoped>

</style>
