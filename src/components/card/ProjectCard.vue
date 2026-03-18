<script setup lang="ts">
import type { Project } from '@/objects/Project'
import Card from 'primevue/card'
import CardGalleria from './CardGalleria.vue'
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
      <div v-html="project.description" />
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
