<template>
  <div class="loader-wrapper">
    <div class="preview-box">
      <div class="loader-1"></div>
    </div>
    <div class="preview-box">
      <div class="loader-2"></div>
    </div>
    <div class="preview-box">
      <div class="loader-3">
        <span class="progress-bar"></span>
        <span class="progress-bar"></span>
        <span class="progress-bar"></span>
        <span class="progress-bar"></span>
      </div>
    </div>
    <div class="preview-box">
      <div class="loader-4"></div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      percentage: 0,
      images: [
        "icon-ticket", "icon-lifebuoy", "icon-compass", "icon-history", "icon-clock2", "icon-clock", "icon-alarm", "icon-stopwatch", "icon-redo"
      ]
    }
  },

  computed: {
    imageClass () {
      let index = Math.floor( this.percentage / 10 );
      return this.images[index];
    }
  },

  title: 'Loader',
}
</script>

<style lang="scss">
@import './loader.scss';
</style>
