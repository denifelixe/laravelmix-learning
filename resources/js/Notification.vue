<style>
    .notification {
        border: 1px dashed red;
    }
</style>

<template>
    <div class="notification" v-text="message"></div>
</template>

<script>
    export default {
        props: ['message']
    }
</script>