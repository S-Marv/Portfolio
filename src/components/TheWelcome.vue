<script setup lang="ts">
import { Project } from '@/objects/Project'
import { ref } from 'vue'
import ProjectCard from './card/ProjectCard.vue'
import { Image } from '@/objects/Image'

const TEST_PROJECT = ref(
  new Project('TEST NAME', '<h2>test html</h2> this is a test', [new Image('/w.png', 'w')]),
)
</script>

<template>
  <ProjectCard :project="TEST_PROJECT" />
</template>
