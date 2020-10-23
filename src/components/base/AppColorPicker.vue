<template>
  <div id="app">
    <ColorPicker
      :color="color"
      :onStartChange="color => onChange(color, 'start')"
      :onChange="color => onChange(color, 'change')"
      :onEndChange="color => onChange(color, 'end')"
    />
  </div>
</template>

<script>
import { ColorPicker } from 'vue-color-gradient-picker';

export default {
  name: 'App',

  components: {
    ColorPicker
  },

  data()  {
    return {
      color: {
        red: 255,
        green: 0,
        blue: 0,
        alpha: 1
      }
    }
  },   

  methods: {
    onChange(attrs, name) {
      this.color = { ...attrs };
      this.$store.dispatch('paint/setColor', {
          color: `rgba(${this.color.red}, ${this.color.green}, ${this.color.blue}, ${this.color.alpha})`
        });
    }
  }
}
</script>

<style src="vue-color-gradient-picker/dist/index.css" lang="css" />