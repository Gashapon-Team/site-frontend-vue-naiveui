<template>
  <n-date-picker v-model:value="timestamp" type="datetime" clearable />
  <pre>{{ JSON.stringify(timestamp) }}</pre>
</template>

<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup () {
    return {
      timestamp: ref(1183135260000)
    }
  }
})
</script>
