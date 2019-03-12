<template>
    <div class="mt-3">
    <h1 class="text-uppercase">Frequently Asked Questions:</h1>
    <v-list
            subheader
            three-line
            v-for="question in questions" :key="question.id"
            class="tile bg-transparent pt-3 pb-3"
            height="auto"
    >
        <div class="font-weight-bold">Q: {{question.title}}</div>
        <div v-html="question.body"></div>
    </v-list>
    </div>
</template>

<script>
    export default {
        name: "QuestionList",
        data() {
            return {
                questions: []
            }
        },
        created() {
            axios.get('/api/questions')
                .then(res => this.questions = res.data.data);
        }
    }
</script>

<style scoped>
    .tile {
        background: transparent;
    }
</style>
