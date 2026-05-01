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
  <div class="category">
    <h1>{{ name }}</h1>
    <p>{{ description }}</p>
    <div class="project-box">
      <ProjectCard v-for="project in projects" :project="project" class="card" />
    </div>
  </div>
</template>
<style scoped>
h1 {
  margin-left: 1rem;
}

.project-box {
  display: flex;
  flex-flow: row wrap;
  gap: 20px;
  margin-top: 10px;
}
</style>
