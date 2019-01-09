<template>
  <div>
    <h4>{{ listElement.text }}</h4>
    <router-view />
  </div>
</template>

<script>
  export default {
    name: 'list-element',
    props: ['list-element'],
  };
</script>

<style scoped>

</style>
