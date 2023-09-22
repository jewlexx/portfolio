<script setup lang="ts">
export interface Props {
    link: Link;
}

defineProps<Props>();
</script>

<template>
    <a :href="link.url" :title="link.title" target="_blank" rel="noopener noreferrer" class="role">
        <component :is="link.emoji" />
    </a>
</template>
