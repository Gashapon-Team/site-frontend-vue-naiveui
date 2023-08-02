<script setup>
import Daterange from '../components/Daterange.vue'
</script>

<template>
    <div style="max-width: 1280px; margin: auto;">
        <n-h1>DEMO</n-h1>
        <n-h3>日期區間 (含快選近一周、一個月、三個月選項)</n-h3>
        <Daterange isShowPreData="true" />
    </div>
</template>
