<script setup lang="ts">
import type { Image } from '@/objects/data_structures/Image'
import Galleria from 'primevue/galleria'
import { Image as PrimeImage} from 'primevue';
import { ref } from 'vue';

defineProps<{
  images: Image[]
}>()

const responsiveOptions = ref([
    {
        breakpoint: '1300px',
        numVisible: 4
    },
    {
        breakpoint: '575px',
        numVisible: 1
    }
]);
</script>

<template>
  <Galleria
    :value="images"
    :responsiveOptions="responsiveOptions"
    :numVisible="5"
    :circular="true"
    containerStyle="max-width: 640px"
    :showIndicators="images.length > 1"
    :showThumbnails="false"
  >
    <template #item="slotProps">
      <PrimeImage
        :src="'images/' + slotProps.item.source"
        :alt="slotProps.item.altText"
        v-tooltip.top="slotProps.item.altText"
        style="display: block"
        height="200px"
        preview
      />
    </template>
  </Galleria>
</template>

<style>
.p-galleria {
  padding: 10px;
  --p-galleria-border-width: 0px;
  border-radius: 0;
  --p-galleria-nav-button-background: rgba(0, 0, 0, 0.24);
  --p-galleria-nav-button-hover-background: rgba(0, 0, 0, 0.75);
}

.p-image-toolbar{
  visibility: collapse;
}
</style>
