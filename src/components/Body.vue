<template>
    <div class="BodyCSS">
        <RouterView />
    </div>
</template>

<script setup>
import { RouterView } from 'vue-router'
</script>
  
<style scoped>
.BodyCSS{
    width: 100%;
    height: 100%;
}
</style>