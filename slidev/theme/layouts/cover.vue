<script setup lang="ts">
import { computed } from 'vue'
import pptLogo from '../assets/ppt-logo.png'
import { handleBackground } from '../layoutHelper'

const props = defineProps({
  background: {
    type: String,
    // random image from a curated Unsplash collection by Anthony
    default: null,
  },
})

const style = computed(() => handleBackground(props.background, true))
</script>

<template>
  <div
    class="slidev-layout cover text-center"
    :style="style"
  >
    <img
      :src="pptLogo"
      class="slidev-layout-cover-logo"
    />

    <div class="my-auto w-full">
      <slot />
    </div>
  </div>
</template>

<style>
.slidev-layout{
  position: relative;
}
.slidev-layout-cover-logo{
  position: absolute;
  top: 1em;
  right: 2em;
  width: 140px;
}
</style>
