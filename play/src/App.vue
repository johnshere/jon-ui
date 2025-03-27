<template>
  <div class="play-wrap">
    <div v-loading="true" />
    111
    <JnButton>test111222</JnButton>
  </div>
</template>

<script setup lang="ts">
import { JnButton } from '@jon-ui/components'
import '../../packages/theme-chalk/src/button.scss'
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

    .play-wrap {
      height: 100%;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
}
</style>
