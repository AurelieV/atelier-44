<template>
  <svg
    id="visual"
    viewBox="0 0 960 128"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    version="1.1"
    aria-hidden="true"
  >
    <g
      :transform="inversed ? 'scale (-1, 1)' : ''"
      :transform-origin="inversed ? 'center' : ''"
    ></g>
    <path
      d="M-0,20l40,7.8c40,7.9 120,23.5 200,23c80,-0.5 160,-17.1 240,-29.5c80,-12.3 160,-21.3 240,-21.3c80,0 160,9 200,13l40,4l0,111l-960,0l-0,-108Z"
      :fill="inversed ? 'hsl(219, 48%, 15%)' : 'hsl(60, 3%, 93%)'"
      stroke-linecap="round"
      stroke-linejoin="miter"
    ></path>
  </svg>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: { inversed: { type: Boolean, default: false } }
})
</script>
