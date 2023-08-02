<template>
    <div class="HeaderCSS">
        <n-space justify="end">
            <span style="font-variant-numeric: tabular-nums">
                <n-countdown ref="countdown" :duration="10*60000" />
                後自動登出
            </span>
            <n-icon :color="primaryColor" size="24"><NotificationsNoneOutlined /></n-icon>
            <n-icon :color="primaryColor" size="24"><HelpOutlineSharp /></n-icon>
            <n-divider vertical />
            <MemberDropdown />
            <!-- <n-button size="tiny" @click="handleReset">Reset</n-button> -->
        </n-space>
    </div>
</template>

<script setup>
import { ref } from "vue";
import { NIcon } from 'naive-ui'
import {
    NotificationsNoneOutlined,
    HelpOutlineSharp
} from '@vicons/material'
import MemberDropdown from "./MemberDropdown.vue";

let countdown = ref();
const primaryColor = "#3755BB"

// const handleReset = () => {
//     countdown.value?.reset();
// }

</script>
  
<style scoped>
.HeaderCSS {
    width: 100%;
    height: 50px;
    padding: 10px 40px;
    background-color: #FFF;
    box-shadow: 0px 1px 2px 0px #0000000D;
}
</style>