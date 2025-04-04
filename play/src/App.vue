<template>
  <div class="play-wrap">
    <JnConfigProvider>
      111
      <JnButton>test111222</JnButton>
    </JnConfigProvider>
  </div>
</template>

<script setup lang="ts">
import { JnConfigProvider, JnButton } from '@jon-ui/components'
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
