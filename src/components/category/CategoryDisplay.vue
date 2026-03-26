<script setup lang="ts">
import type { Project } from '@/objects/data_structures/Project'
import ProjectCard from '../card/ProjectCard.vue'

defineProps<{
  name: string
  description: string
  projects: Project[]
}>()
</script>
<template>
  <h1>{{ name }}</h1>
  <p>{{ description }}</p>
  <div class="project-box">
    <ProjectCard v-for="project in projects" :project="project" class="card" />
  </div>
</template>
<style scoped>
h1 {
  margin: 0 0 0 10px;
}

.project-box {
  display: flex;
  flex-flow: row wrap;
}

.project-box > div {
  margin: 10px 15px;
}
</style>
