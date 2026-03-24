<script setup lang="ts">
import { Button, Image } from 'primevue';

import type { Link } from '@/objects/data_structures/Link';
import { IconIdMap } from '@/assets/data/IconMap';

const {link} = defineProps<{link:Link}>();
const icon = IconIdMap.get(link.iconId);
</script>
<template>
    <a :href="link.url" target="_blank" rel="noopener noreferrer">
        <Button :style="'background:' + icon?.backgroundColor">
            {{ link.text }}
            <Image :src="icon?.url" width="30"/>
        </Button>
    </a>
</template>
<style lang="css" scoped>

.p-button{
    --p-button-primary-color:white;
    --p-button-primary-hover-color: var(--p-button-primary-color);
    --p-button-primary-active-color:var(--p-button-primary-color);
    --p-button-primary-focus-ring-color: transparent;
}

</style>