<template>
    <div>
        <app-header></app-header>
        <router-view></router-view>
        <app-footer></app-footer>
    </div>
</template>

<script>
    import AppHeader from './AppHeader';
    import AppBody from './AppBody';
    import AppFooter from './AppFooter';

    export default {
        name: "AppHome",
        components: {
            AppHeader, AppBody, AppFooter
        }
    }
</script>

<style scoped>

</style>
