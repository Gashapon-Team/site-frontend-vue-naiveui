<template>
  <n-loading-bar-provider>
    <n-message-provider>
      <n-notification-provider>
        <n-dialog-provider>
          <demo-view />
        </n-dialog-provider>
      </n-notification-provider>
    </n-message-provider>
  </n-loading-bar-provider>
  </template>

  <script>
  import { defineComponent } from "vue";
  import DemoView from "./DemoView.vue";

  export default defineComponent({
  components: {
    DemoView,
  },
  });
  </script>
