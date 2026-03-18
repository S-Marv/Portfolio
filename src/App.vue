<script setup lang="ts">

</script>

<template>
  <main>
    <p><strong>Current route path:</strong> {{ $route.fullPath }}</p>
    <RouterLink to="/">Go to Home</RouterLink>
    <RouterLink to="/formatter">Go to Formatter</RouterLink>
    <RouterView />
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}
</style>
