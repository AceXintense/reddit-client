<template>
    <div>
        <div :class="{'overlay': true}"></div>
        <div :class="{'card': true, 'card-modal': true, 'transparent': transparency}">
            <div :class="{'card-header': true, 'transparent': transparency}">
                <h1>{{ title }}</h1>
                <button class="btn btn-primary" @click="toggleClose">
                    <i class="fa fa-times" aria-hidden="true"></i>
                </button>
            </div>
            <div class="view">
                <slot></slot>
            </div>
        </div>
    </div>

</template>

<script>

    export default {
        props: ['title', 'transparency'],
        data() {
            return {};
        },
        methods: {
            toggleClose() {
                this.$emit('close', true);
            }
        }
    }

</script>

<style scoped>

    .card.card-modal {
        position: fixed;
        left: 0;
        right: 0;
        width: 500px;
        min-height: 400px;
        max-height: 80vh;
        z-index: 100000000000000;
        top: 200px;
        margin: auto;
        border-radius: 4px;
        overflow: hidden;
        background-color: #334650;
        box-shadow: 0px 0px 65px -20px black;
    }

    .overlay {
        width: 100vw;
        height: 100vh;
        position: absolute;
        z-index: 10000;
        background-color: #000000b5;
    }

    .card.card-modal .card-header .btn {
        position: absolute;
        bottom: 25px;
        right: 25px;
    }

    .card.card-modal .view {
        padding: 130px 20px 20px 20px;
    }

    .card.card-modal .view {
        position: relative;
        height: auto;
    }

</style>