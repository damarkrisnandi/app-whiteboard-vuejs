<template>
  <div id="pencil-size">
    <b-form-spinbutton id="demo-sb" v-model="$store.state.paint.size" @change="onChange" min="1" max="100"></b-form-spinbutton>
    <p>Size: {{ $store.state.paint.size }}</p>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        value: 1
      }
    },
    mounted() {
        this.onInit();
    },
    methods: {
        onInit() {
            this.value = this.$store.state.paint.size;
        },
        onChange(e) {
            console.log(e);
            this.$store.dispatch('paint/setSize', {
                size: e
            });
        }
    }
  }
</script>
<style scoped>
    #pencil-size {
        margin: 5px;
    }
</style>