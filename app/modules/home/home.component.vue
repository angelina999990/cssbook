<template>
  <div class="home">
    <p>
      CSS Recipes records some common display effects so that you can have it at hand when needed.<br>
    </p>
    <div class="about">
      <div><span class="label">Framework Used:</span><span>Vue.js ^2.4.2 </span></div>
      <div><span class="label">EcamScript:</span><span>ES2015</span></div>
      <div><span class="label">CSS Processor:</span><span>LESS</span></div>
      <div><span class="label">Build Tool:</span><span>Gulp</span></div>
      <div><span class="label">Browser Support:</span><span>Chrome, Firefox, Safari</span></div>
      <div><span class="label">Server:</span><span>Not required</span></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'home',
    title: 'Home'
  }
</script>

<style lang="scss" scoped>
@import './home.scss';
</style>
