<template>
  <nav class="sidebar">
    <ul class="recipe-list">
      <li v-for="(item, index) in menuList" @click="menuItemClicked(item)" v-bind:class="{ 'active': item.isActive}">{{ item.title }}</li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'sidebar',
  props: ['menuList'],

  methods: {
    menuItemClicked (item) {
      eventBus.$emit('menuItemClicked', item);
    }
  }
}
</script>
