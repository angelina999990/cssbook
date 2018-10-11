<template>
  <div class="page pointer-hover-effects">
    <div class="page__demo">
      <div class="page__container">
        <div class="photobox photobox_type1">
          <div class="photobox__previewbox">
            <div class="photobox__preview"></div>
            <span class="photobox__label">Effect #1</span>
          </div>
        </div>
        <div class="photobox photobox_type2">
          <div class="photobox__previewbox">
            <div class="photobox__preview"></div>
            <span class="photobox__label">Effect #2</span>
          </div>
        </div>
        <div class="photobox photobox_type3">
          <div class="photobox__previewbox">
            <div class="photobox__preview"></div>
            <span class="photobox__label">Effect #3</span>
          </div>
        </div>
      </div>
    </div>
    <footer> Inspired by <a href="https://codepen.io/melnik909/pen/QgPpeg">Stas Melnikov's work</a></footer>
  </div>
</template>

<script>
export default {
  title: 'Pointer Hover Effects'
}
</script>

<style lang="scss">
@import './pointerHoverEffects.scss';
</style>
