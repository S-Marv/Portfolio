<script setup lang="ts">
import { Project } from '@/objects/Project'
import { ref } from 'vue'
import ProjectCard from './card/ProjectCard.vue'
import { Image } from '@/objects/Image'
import { DataLoader } from '@/objects/DataLoader'
import CategoryDisplay from './category/CategoryDisplay.vue'

const academicProjects = new DataLoader().getAcademicProjects()
</script>

<template>
  <CategoryDisplay
    name="Academic Projects"
    description=""
    :projects="academicProjects"
  ></CategoryDisplay>
</template>
