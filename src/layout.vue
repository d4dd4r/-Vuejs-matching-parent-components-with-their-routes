<template>
  <div>
    <h2>This is Layout</h2>
    <router-view />
  </div>
</template>

<script>
  import { beforeRouteEnter } from './mixins';

  export default {
    name: 'layout',
    mixins: [{
      beforeRouteEnter,
    }],
    // mounted() {
    //   console.log('[layout component] route is:', this.routeName);
    // },
  };
</script>

<style scoped>

</style>
