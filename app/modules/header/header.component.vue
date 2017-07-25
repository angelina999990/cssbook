<template>
  <header class="header">
    <h1>{{ headerName }}</h1>
  </header>
</template>

<script>
export default {
  name: 'header',
  props: ['headerName']
}
</script>
