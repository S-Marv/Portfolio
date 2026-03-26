<script setup lang="ts">
import { Button, Image } from 'primevue';

import type { Link } from '@/objects/data_structures/Link';
import { IconIdMap } from '@/objects/IconMap';

const {link} = defineProps<{link:Link}>();
const icon = IconIdMap.get(link.iconId);
</script>
<template>
    <Button as="a" :href="link.url" target="_blank" rel="noopener noreferrer" :style="'background:' + icon?.backgroundColor">
        {{ link.text }}
        <img :src="icon?.url" style="height:30px; width: 30px;"/>
    </Button>
</template>
<style lang="css" scoped>

.p-button{
    --p-button-primary-color:white;
    --p-button-primary-hover-color: var(--p-button-primary-color);
    --p-button-primary-active-color:var(--p-button-primary-color);
    --p-button-primary-focus-ring-color: transparent;
    --p-button-primary-border-color: rgba(119, 119, 119, 0.5);
    --p-button-primary-hover-border-color: var(--p-button-primary-border-color);
    font-size: 18px;
    margin: 5px;
}

@media (prefers-color-scheme: dark) {
    .p-button{
        --p-button-primary-border-color: rgba(119, 119, 119, 0.5);
        --p-button-primary-hover-border-color: var(--p-button-primary-border-color);
    }
   
}

</style>