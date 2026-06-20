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
      <h2>{{ project.name }}</h2>
    </template>
    <template #content>
      <div v-html="project.description" class="description"></div>
    </template>
    <template #footer>
        <div>
          <LinkButton v-for="link in project.links" :link="link"/>
        </div>
    </template>
  </Card>
</template>
<style>

.description p{
  padding-bottom: 5px;
}

.p-card {
  width: 375px;
  --p-card-background:var(--vt-c-white);
  text-align: center;
  border: 2px solid black;
}

.p-card-body {
 flex-grow: 1;
 align-items: center;
 padding-top: 0px !important;
}

.p-card-footer{
  flex-grow: 1;
  display: flex;
  align-items: flex-end;
}


@media (prefers-color-scheme: dark) {
    .p-card{
      --p-card-background:rgb(31, 31, 31);
      border-color: rgb(65, 65, 65);
    }
}
</style>
