<template>
  <div class="main">
    <canvas id="canvas" 
        @mousedown="startPainting" 
        @mousemove="handleMouseMove" 
        @mouseup="finishedPainting">
    </canvas>
  </div>
</template>

<script>
export default {
  name: 'AppCanvas',
  data() {
      return {
          ctx:null,
          canvas:null,
          prevPos: { offsetX: 0, offsetY: 0 },
          line: [],
          isPainting: false,
      }
  },
  mounted() {
      this.setCanvas();
      this.setPencil();
  },
  methods: {
    setCanvas() {
        this.canvas = document.getElementById("canvas");
        this.canvas.height = 600;
        this.canvas.width = 1000;
    },
    setPencil() {
        this.ctx = this.canvas.getContext("2d");
        this.ctx.lineJoin = 'round';
        this.ctx.lineCap = 'round';
        this.ctx.lineWidth = 5;
    },
    startPainting(e) {
      const { offsetX, offsetY } = e;
      this.isPainting = true;
      this.prevPos = { offsetX, offsetY };
    },
    handleMouseMove(e) {
        if (this.isPainting) {
          const { offsetX, offsetY } = e;
          const offSetData = { offsetX, offsetY };
          const positionInfo = {
            start: { ...this.prevPos },
            stop: { ...offSetData },
          };
          this.line = this.line.concat(positionInfo);
          this.paint(this.prevPos, offSetData, this.$store.state.paint.color);
        }
      },
    finishedPainting() {
      this.isPainting = false;
      this.ctx.beginPath();
    },
    paint(prevPosition, currPosition, strokeStyle) {
        const { offsetX, offsetY } = currPosition;
        const { offsetX: x, offsetY: y } = prevPosition;
        this.ctx.beginPath();
        this.ctx.strokeStyle = strokeStyle;
        this.ctx.moveTo(x, y);
        this.ctx.lineTo(offsetX, offsetY);
        this.ctx.stroke();
        this.prevPos = { offsetX, offsetY };
      }
  }
};
</script>
<style>
canvas {
  /* background: gray; */
  border: 1px solid black;
  cursor: crosshair;
}
.main {
  display: flex;
  justify-content: center;
}
.color-guide {
  margin: 20px 40px;
}
h5 {
  margin-bottom: 10px;
}
.user {
  padding: 7px 15px;
  border-radius: 4px;
  color: white;
  font-size: 13px;
  font-weight: bold;
  background: red;
  margin: 10px 0;
}
.guest {
  background: greenyellow;
  color: black;
}
</style>