<template>
  <div id="app" class="flex">
    <app-color-picker></app-color-picker>
    <app-canvas></app-canvas>
  </div>
</template>

<script>
import AppCanvas from './components/base/AppCanvas'
import AppColorPicker from './components/base/AppColorPicker'

export default {
  name: 'App',
  components: {
    AppCanvas,
    AppColorPicker
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.flex {
  display: flex;
}
</style>
