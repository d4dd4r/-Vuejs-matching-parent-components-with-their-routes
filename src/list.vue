<template>
  <div>
    <h2>List component works</h2>
    <template v-for="listEl in list">
      <list-element :list-element="listEl" />
    </template>
  </div>
</template>

<script>
  import ListElement from './list-element.vue';
  import { beforeRouteEnter } from './mixins';

  export class List {
    constructor(data) {
      this.text = data.text;
      this.value = data.value;
    }
  }

  export default {
    name: 'list',
    data: () => ({
      list: [
        new List({ text: 'task 1', value: 1 }),
        new List({ text: 'task 2', value: 2 }),
        new List({ text: 'task 3', value: 3 }),
        new List({ text: 'task 4', value: 4 }),
      ],
    }),
    components: {
      ListElement,
    },
    mixins: [{
      beforeRouteEnter,
    }],
    // mounted() {
    //   console.log('[list component] route is:', this.routeName);
    // },
  };
</script>

<style scoped>

</style>
