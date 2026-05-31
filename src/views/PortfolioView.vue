<script setup lang="ts">
import { AcademicProjects, PersonalProjects } from '@/objects/DataLoader'
import CategoryDisplay from '../components/category/CategoryDisplay.vue'
import Introduction from '@/components/introduction/Introduction.vue';

</script>

<template>
  <div class="portfolio">
    <Introduction/>
    <CategoryDisplay
      name="Academic Projects"
      description=""
      :projects="AcademicProjects"
    />
    <CategoryDisplay name="Personal Projects" description="" :projects="PersonalProjects"/>
  </div>
</template>
<style>
.portfolio{
  display: flex;
  flex-direction: column;
}

.category{
  margin-top: 10px;
}

</style>
