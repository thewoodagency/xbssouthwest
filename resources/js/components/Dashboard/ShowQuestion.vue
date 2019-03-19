<template>
    <v-container fluid grid-list-md>
        <v-layout>
            <v-flex xs2></v-flex>
            <v-flex xs8>
                <v-layout align-center justify-space-between row>
                    <h1>Edit Question</h1>
                    <router-link to="/dashboard/create">
                        <v-btn color="green">+ Add New Question</v-btn>
                    </router-link>
                </v-layout>
                <question
                        v-for="question in questions"
                        :key="question.path"
                        :question=question
                >
                </question>
                <v-divider></v-divider>
            </v-flex>
            <v-flex xs2>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    import Question from './Question';

    export default {
        name: "EditQuestion",
        data() {
            return {
                questions: []
            }
        },
        components: {
            Question
        },
        created() {
            axios.get('/api/questions')
                .then(res => this.questions = res.data.data);
        }
    }
</script>

<style scoped>

</style>
