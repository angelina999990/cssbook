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
    <!-- <div class="preview-box">
      <div class="loader-5">
        <svg width="800" height="500" version="1.1" xmlns="http://www.w3.org/2000/svg">
          <path d="M 200,60 A 50,50 0 1 1 300,60 A 50,50 0 1 1 200,60" stroke="orange" fill="none" id="circlePath"></path>
          <circle r="5" fill="darkorange">
            <animateMotion dur="6s" repeatCount="indefinite">
              <mpath xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#circlePath"></mpath>
            </animateMotion>
          </circle>
        </svg>
      </div>
    </div> -->
    <div class="preview-box">
      <div class="loader-6"></div>
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
