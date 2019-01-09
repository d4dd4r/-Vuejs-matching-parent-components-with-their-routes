<template>
  <p>{{ getRandomNumb(1, 100) }}</p>
</template>

<script>
  import { beforeRouteEnter } from './mixins';

  export default {
    name: 'random',
    methods: {
      getRandomNumb(min, max) {
        const rand = min + Math.random() * (max + 1 - min);
        return Math.floor(rand);
      },
    },
    mixins: [{
      beforeRouteEnter,
    }],
    // mounted() {
    //   console.log('[random component] route is:', this.routeName);
    // },
  };
</script>

<style scoped>

</style>
