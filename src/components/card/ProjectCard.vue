<script setup lang="ts">
import Card from 'primevue/card'
import CardGalleria from './CardGalleria.vue'

import { Project } from '@/objects/data_structures/Project';
import LinkButton from './LinkButton.vue';
defineProps<{
  project: Project
}>()

</script>

<template>
  <Card>
    <template #header>
      <CardGalleria :images="project.images" />
    </template>
    <template #title>
      <h1>{{ project.name }}</h1>
    </template>
    <template #content>
      <div v-html="project.description"></div>
    </template>
    <template #footer>
        <div class="flex gap-4 mt-1">
          <LinkButton v-for="link in project.links" :link="link"/>
        </div>
    </template>
  </Card>
</template>
<style scoped>
.p-card {
  width: 375px;
  --p-card-background:white;
}
@media (prefers-color-scheme: dark) {
    .p-card{
      --p-card-background:black;
    }
}
</style>
