<template>
    <div class="main-selection">

        <button class="btn btn-default" @click="toggleDropdown">Show {{ currentSize }}</button>

        <div class="selection" v-if="openDialogue">
            <div @click="changeSize(value)" :class="{'select': true, 'active': value === currentSize}" v-if="value % stepSize === 0" v-for="value in maxSize">
                {{ value }}
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        name: 'Listing-Size',
        props: {
            'currentSize': {
                default: 25
            },
            'stepSize': {
                default: 5
            },
            'maxSize': {
                default: 100
            }
        },
        data() {
            return {
                openDialogue: false
            }
        },
        methods: {
            toggleDropdown() {
                this.openDialogue = !this.openDialogue;
            },
            changeSize(size) {
                this.currentSize = size;
                this.toggleDropdown();
                this.$emit('sizeChanged', size);
            }
        }
    }
</script>

<style scoped>

    .btn {
        position: absolute;
        top: 120px;
        right: 5px;
        width: 100%;
        z-index: 1000;
    }

    .main-selection {
        width: 120px;
        position: absolute;
        right: 0;
    }

    .selection {
        position: absolute;
        background-color: white;
        border-radius: 4px;
        right: 5px;
        top: 120px;
        z-index: 10001;
        overflow: hidden;
        width: 100%;
    }

    .selection .select {
        font-weight: bold;
        padding: 5px;
    }

    .selection .select:hover {
        background-color: #45565c;
        color: white;
    }

    .selection .select.active {
        background-color: #33454b;
        color: white;
    }

</style>