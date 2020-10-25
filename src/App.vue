<template>
  <div id="app">
    <app-navbar></app-navbar>
    <div class="flex">
      <app-color-picker></app-color-picker>
      <app-canvas></app-canvas>
    </div>
  </div>
</template>

<script>
import AppCanvas from './components/base/AppCanvas'
import AppColorPicker from './components/base/AppColorPicker'
import AppNavbar from './components/base/AppNavbar'

export default {
  name: 'App',
  components: {
    AppCanvas,
    AppColorPicker,
    AppNavbar
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
}

.flex {
  display: flex;
  margin-top: 30px;
}
</style>
