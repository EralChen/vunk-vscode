<script lang="ts" setup>
import type { User } from '@skzz-template/api/user'
import { SkUserSelectTables } from '@skzz-template/components/user-select-tables'
import { ref } from 'vue'

const currentUsers = ref<User[]>([])
</script>

<template>
  <p>currentUsers: {{ currentUsers }}</p>
  <SkUserSelectTables
    v-model="currentUsers"
  ></SkUserSelectTables>
</template>
