<script setup lang="ts">



</script>

<template>
  <!-- <header class="debug">
      <p>Current route path: {{ $route.fullPath }}</p>
      <RouterLink to="/">Go to Home</RouterLink>
      <RouterLink to="/formatter">Go to Formatter</RouterLink>
  </header> -->
  <main>
    <RouterView />
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

main{
  margin: 100px 0;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}
</style>
