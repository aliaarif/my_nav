<template>
  <ul>
    <li v-for="item in navConfig" :key="item.id">
      <span @click="toggleNavChildren(item.id)">{{ item.name }}</span>
      <dynamic-nav
        v-if="item.children"
        :navConfig="item.children"
        v-show="expandedItems.includes(item.id)"
      ></dynamic-nav>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    navConfig: Array,
  },
  data() {
    return {
      expandedItems: [],
    };
  },
  methods: {
    toggleNavChildren(id) {
      if (this.expandedItems.includes(id)) {
        this.expandedItems = this.expandedItems.filter(
          (itemId) => itemId !== id
        );
      } else {
        this.expandedItems.push(id);
      }
    },
  },
};
</script>

<style>
</style>
