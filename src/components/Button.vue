<template>
    <span class="button">{{ text }}</span>
</template>

<script lang="ts" setup>
defineProps({
    text: String
})
</script>

<style lang="scss" scoped>
.button {
    display: inline-block;
    border: 3px solid currentColor;
    padding: 0.5em 1em;
    font-weight: 700;
    text-transform: uppercase;
}
</style>