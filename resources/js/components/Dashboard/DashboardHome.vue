<template>
    <div>
        <app-header></app-header>
        <router-view></router-view>
    </div>
</template>

<script>
    import AppHeader from '../AppHeader';

    export default {
        name: "DashboardHome",
        components: {
            AppHeader
        },
        created() {
            console.log(User.loggedIn());
            if (!User.loggedIn()) {
                this.$router.push({name: 'login'});
            }
        }
    }
</script>

<style scoped>

</style>
