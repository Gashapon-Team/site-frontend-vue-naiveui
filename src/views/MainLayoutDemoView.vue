<template>
  <n-space vertical size="large">
    <n-layout has-sider>
      <n-layout-sider content-style="padding: 24px;">
        sider
        sider
      </n-layout-sider>
      <n-layout>
        <n-layout-header>Header</n-layout-header>
        <n-layout-content content-style="padding: 24px;">
          Content
        </n-layout-content>
        <n-layout-footer>Footer</n-layout-footer>
      </n-layout>
    </n-layout>
  </n-space>
</template>

<style scoped>
.n-layout-header,
.n-layout-footer {
  background: rgba(128, 128, 128, 0.2);
  padding: 24px;
}

.n-layout-sider {
  background: rgba(128, 128, 128, 0.3);
}

.n-layout-content {
  background: rgba(128, 128, 128, 0.4);
}
</style>