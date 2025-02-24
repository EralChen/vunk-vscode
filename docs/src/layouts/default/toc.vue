<script lang="ts" setup>
import type { MenuItem } from '#/vitepress/composables/outline'
import VPDocAsideOutline from '#/vitepress/components/VPDocAsideOutline.vue'
import { getHeaders } from '#/vitepress/composables/outline'
import { onContentUpdated } from '@vunk/shared/vike/vue/hooks'
import { shallowRef } from 'vue'

const headers = shallowRef<MenuItem[]>([])

onContentUpdated(() => {
  headers.value = getHeaders(2)
}, {
  hooks: ['mounted', 'updated'],
})
</script>

<template>
  <VPDocAsideOutline
    :headers="headers"
  ></VPDocAsideOutline>
</template>
