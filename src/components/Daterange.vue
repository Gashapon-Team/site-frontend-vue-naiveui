<template>
  <div>
    <n-date-picker
      v-model:formatted-value="dateRangeValue"
      value-format="yyyy-MM-dd"
      type="daterange"
      :shortcuts="rangeShortcuts"
      start-placeholder="起始日"
      end-placeholder="結束日"
      close-on-select
      @update:formatted-value="updateDate"
    />
    <pre v-show="isShowPreData">{{ JSON.stringify(dateRangeValue) }}</pre>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue'

const emit = defineEmits(['returnDaterange'])
const isShowPreData = ref(false)
const props = defineProps({ resetTrigger: Boolean })

//set default date
const end = new Date()
const last3month = new Date()
last3month.setMonth(last3month.getMonth() - 3)
const defaultDateRange = [last3month.toISOString().substr(0, 10), end.toISOString().substr(0, 10)]

let dateRangeValue = ref(defaultDateRange)

watch(
  //父組件觸發resetTrigger
  props,
  ({ resetTrigger: newValue }) => {
    if (newValue) {
      dateRangeValue.value = defaultDateRange
      updateDate(dateRangeValue.value)
    }
  },
  {
    immediate: true,
    deep: true
  }
)

function updateDate(val) {
  dateRangeValue.value = val
  console.log('updateDate', dateRangeValue.value)
  emit('returnDaterange', dateRangeValue.value)
}

onMounted(() => {
  //created
  updateDate(dateRangeValue.value)
})

const rangeShortcuts = {
  近一周: () => {
    const last1week = new Date()
    last1week.setTime(last1week.getTime() - 3600 * 1000 * 24 * 7)
    return [last1week, end]
  },
  近一個月: () => {
    const last1month = new Date()
    last1month.setTime(last1month.getTime() - 3600 * 1000 * 24 * 30)
    return [last1month, end]
  },
  近三個月: [last3month, end]
}
</script>
