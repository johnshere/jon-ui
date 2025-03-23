<template>
  <div class="play-container">
    <div v-loading="true" />
    111
    <j-button>test</j-button>
  </div>
</template>

<script setup lang="ts">
import { JButton } from '@jon-ui/components'
</script>

<style lang="scss">
html,
body {
  width: 100vw;
  height: 100vh;
  margin: 0;

  #play {
    height: 100%;
    width: 100%;

    .play-container {
      height: 100%;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
}
</style>
