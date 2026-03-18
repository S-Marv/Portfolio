<script setup lang="ts">
import { DataLoader } from '@/objects/DataLoader'
import CategoryDisplay from '../components/category/CategoryDisplay.vue'

const academicProjects = new DataLoader().getAcademicProjects()
</script>

<template>
  <CategoryDisplay
    name="Academic Projects"
    description=""
    :projects="academicProjects"
  ></CategoryDisplay>
</template>
