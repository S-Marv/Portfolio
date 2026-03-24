<script setup lang="ts">
import { AcademicProjects } from '@/objects/DataLoader'
import CategoryDisplay from '../components/category/CategoryDisplay.vue'

</script>

<template>
  <CategoryDisplay
    name="Academic Projects"
    description=""
    :projects="AcademicProjects"
  ></CategoryDisplay>
</template>
