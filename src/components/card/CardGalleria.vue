<script setup lang="ts">
import type { Image } from '@/objects/Image'
import Galleria from 'primevue/galleria'
defineProps<{
  images: Image[]
}>()
</script>

<template>
  <Galleria
    :value="images"
    :numVisible="5"
    :circular="true"
    containerStyle="max-width: 640px"
    :showItemNavigators="images.length > 1"
    :showThumbnails="false"
  >
    <template #item="slotProps">
      <img
        :src="slotProps.item.source"
        :alt="slotProps.item.altText"
        v-tooltip.top="slotProps.item.altText"
        style="width: 100%; display: block"
      />
    </template>
  </Galleria>
</template>
