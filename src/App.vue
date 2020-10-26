<template>
  <div id="app">
    <app-navbar></app-navbar>
    <div class="flex">
      <div>
        <app-color-picker></app-color-picker>
        <app-pencil-size></app-pencil-size>
      </div>
      <app-canvas></app-canvas>
    </div>
  </div>
</template>

<script>
import AppCanvas from './components/base/AppCanvas'
import AppColorPicker from './components/base/AppColorPicker'
import AppNavbar from './components/base/AppNavbar'
import AppPencilSize from './components/base/AppPencilSize'

export default {
  name: 'App',
  components: {
    AppCanvas,
    AppColorPicker,
    AppNavbar,
    AppPencilSize
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
