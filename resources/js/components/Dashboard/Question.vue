<template>
    <v-card>
        <v-card-title primary-title>
            <div>
                <h3 class="headline mb-0">{{ question.title }}</h3>
                <div class="grey--text">Posted {{ question.created_at }}</div>
            </div>
        </v-card-title>

        <v-card-text v-html="body"></v-card-text>
        <v-card-actions>
            <v-btn icon small @click="edit"><v-icon color="orange">edit</v-icon></v-btn>
            <v-btn icon small @click="destroy"><v-icon color="red">delete</v-icon></v-btn>
        </v-card-actions>

    </v-card>
    
</template>

<script>

    export default {
        name: "Question",
        props: [ 'question' ],
        computed: {
            body() {
                return md.parse(this.question.body);
            }
        },
        methods: {
            destroy() {
                let result = confirm("Want to delete?");
                if (result) {
                    axios.delete(`/api/questions/${this.question.slug}`)
                        .then(res => this.$router.push('/dashboard/login'))
                        .catch(error => console.log(error.response.data));
                }
            },
            edit() {
                this.$router.push(`/dashboard/questions/${this.question.slug}`)
            }
        }
    }
</script>

<style scoped>

</style>
