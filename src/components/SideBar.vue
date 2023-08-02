<template>
    <n-space vertical align='start'  size='large' class="menu_css" >
        <h2>NewebPay蘭新金流</h2>
        <span>會員平台管理</span>
        <n-menu :options="menuOptions" @update:value="handleUpdateValue"/>  
    </n-space>
</template>

<script>

import { Bell } from "@vicons/tabler";
import { ArrowDropDownRound } from "@vicons/material";
import { QuestionCircle24Regular } from "@vicons/fluent";
import { defineComponent , h } from 'vue';
import { RouterLink } from 'vue-router';
import { NIcon } from "naive-ui";
import {
  BookOutline as BookIcon,
  PersonOutline as PersonIcon,
  WineOutline as WineIcon,
  HomeOutline as HomeIcon
} from "@vicons/ionicons5";

function renderIcon(icon) {
    return () => h(NIcon, null, {
        default: () => h(icon)
    });
}

const menuOptions = [
    // {
    //     label: () => h(
    //         RouterLink, {
    //             to: {
    //                 name: "home",
    //                 params: {
    //                     lang: "en-US"
    //                 }
    //             }
    //         }, 
    //         '會員平台管理',
    //         {
    //             default: () => "Going Home"
    //         }
    //     ),
    //     key: "go-back-home",
    //     icon: renderIcon(HomeIcon)
    // },

    //下底線
    {
        key: "divider-1",
        type: "divider",
        props: {
            style: {
                marginLeft: "32px"
            }
        }
    },

    // 使用另開分頁 
    {
        label: () => h(
            "a", {
                href: "https://en.wikipedia.org/wiki/Hear_the_Wind_Sing",
                target: "_blank",
                rel: "noopenner noreferrer"
            },
            "Hear the Wind Sing"
        ),
        key: "hear-the-wind-sing",
        icon: renderIcon(BookIcon)
    },

    // 一般,但disabled
    {
        label: "Pinball 1973",
        key: "pinball-1973",
        icon: renderIcon(BookIcon),
        disabled: true,
        children: [{
            label: "Rat",
            key: "rat"
        }]
    },
    {
        label: "A Wild Sheep Chase",
        key: "a-wild-sheep-chase",
        disabled: true,
        icon: renderIcon(BookIcon)
    },

    // 一般,有子分類
    {
        label: "Dance Dance Dance",
        key: "Dance Dance Dance",
        icon: renderIcon(BookIcon),
        children: [

            //子分類李再子分類
            // {
            //     type: "group",
            //     label: "People",
            //     key: "people",
            //     children: [{
            //             label: "Narrator",
            //             key: "narrator",
            //             icon: renderIcon(PersonIcon)
            //         },
            //         {
            //             label: "Sheep Man",
            //             key: "sheep-man",
            //             icon: renderIcon(PersonIcon)
            //         }
            //     ]
            // },

            // 蘭馨預計2層
            {
                label: "Beverage",
                key: "beverage",
                icon: renderIcon(WineIcon),
                // children: [{
                //     label: "Whisky",
                //     key: "whisky"
                // }]
            },
            {
                label: "Neweb藍心",
                key: "Neweb藍心",
                icon: renderIcon(BookIcon)
                // children: [{
                //     label: "Whisky",
                //     key: "whisky"
                // }]
            },
            
            // 沒圖示,有子分類
            {
                label: "Food",
                key: "food",
                children: [{
                    label: "Sandwich",
                    key: "sandwich"
                }]
            },

            //沒圖示
            {
                label: "The past increases. The future recedes.",
                key: "the-past-increases-the-future-recedes"
            }
        ]
    }
];

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

            menuOptions,

        }
    },
})
</script>


<style>
    .menu_css{
        background-color:rgba(30,64,175);
        color:white;
        height:100vh;
    }
    .n-icon{
        color:white;
    }
    .n-menu .n-menu-item-content .n-menu-item-content-header a{
        color:white;
    }
    .n-menu .n-menu-item-content .n-menu-item-content-header{
        color:white;
    }
    .n-menu .n-menu-item-content .n-menu-item-content__arrow{
        color:white;
    }
    #app > div > div:nth-child(2) > div.n-space.menu_css > div:nth-child(3){
        width:100%
    }
</style>
