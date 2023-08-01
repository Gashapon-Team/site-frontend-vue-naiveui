<template>
    <Menu id="MenuStyle"/>
    <Header id="HeaderStyle"/>
</template>

<script setup>
import Menu from "../components/Menu.vue";
import Header from "../components/Header.vue";
</script>

<style scoped>
#MenuStyle {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1000;
}
#HeaderStyle{
  position: absolute;
  top: 0;
  left: 0;
  z-index: 999;
}
</style>
