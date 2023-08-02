<template>
    <n-space  size = "large" justify = 'end' align = 'center' style='border:1px solid orange;'>
        3000秒後 世界毀滅
        <n-button text style='font-size:40px;'>
            <n-icon color='rgb(30,64,175)'>
                <Bell />
            </n-icon>
        </n-button>
        <n-button text style='font-size:40px'>
            <n-icon color='rgb(30,64,175)'>
                <QuestionCircle24Regular />
            </n-icon>
        </n-button>
        <n-dropdown :options='options' placement='bottom-start' trigger='click'>
            <n-button text color='rgb(30,64,175)' style='font-size:40px;'> 
                BANG
                <n-icon color='rgb(30,64,175)'>
                    <ArrowDropDownRound />
                </n-icon>
            </n-button>
        </n-dropdown>
    </n-space>
</template>

<script>
import { Bell } from "@vicons/tabler";
import { ArrowDropDownRound } from "@vicons/material";
import { QuestionCircle24Regular } from "@vicons/fluent";
import { defineComponent } from 'vue';

export default defineComponent({
    components: {
        Bell,
        QuestionCircle24Regular,
        ArrowDropDownRound
    },
    setup() {
        return {
            Bell,
            QuestionCircle24Regular,
            ArrowDropDownRound,

            options:[
                {label:'1111111111',key:'1'},
                {label:'222222',key:'2'},
                {label:'13',key:'3'},
            ],
        }
    },
})
</script>

<style >
    .n-space > div:nth-child(4){
        padding-top:0px !important;
    }
</style>

