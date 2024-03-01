<script setup>
</script>
<template>
  <component :is="this.$route.meta.layout ||  'div'">
    <RouterView />
  </component>
</template>
<style scoped>
</style>
