<template>
  <div class="accordionMenu">
    <n-scrollbar style="max-height: 100vh">
      <img alt="Newebpay logo" src="@/assets/NewebPay Logo.png" style="padding: 24px 32px;"/>
      <p style="font-size:12px; padding-left:32px; color:#fff;">
        會員平台管理
      </p>
      <n-menu :options="menuOptions" accordion/>
    </n-scrollbar>
  </div>
</template>
  
<script setup>
import { h } from 'vue'
import { NIcon } from 'naive-ui'
import {
  PersonFilled as PersonIcon,
  InfoSharp as InformationIcon,
  InsertCommentSharp as ChatboxIcon,
  PostAddOutlined as PostIcon,
  AttachMoneyFilled as AttachMoneyIcon,
  ShoppingCartSharp as ShoppingCartIcon,
  StackedLineChartSharp as StackedLineChartIcon
} from '@vicons/material'

function renderIcon(icon) {
  return () => h(NIcon, null, { default: () => h(icon) })
}

const menuOptions = [
  {
    label: '會員中心',
    key: 'memberCenter',
    icon: renderIcon(PersonIcon),
    children: [
      {
        label: '基本資料設定',
        key: 'memberCenter1',
      },
      {
        label: '實名認證 (KYC)',
        key: 'memberCenter2',
      },
      {
        label: '商店',
        key: 'memberCenter3',
      },
      {
        label: '帳戶餘額/提領',
        key: 'memberCenter4',
      },
      {
        label: '發票/對帳單',
        key: 'memberCenter5',
      },
      {
        label: '設定',
        key: 'memberCenter6',
      },
      {
        label: '消費者專區',
        key: 'memberCenter7',
      },
      {
        label: '平台商專區',
        key: 'memberCenter8',
      }
    ]
  },
  {
    label: '幫助中心',
    key: 'helpCenter',
    icon: renderIcon(InformationIcon),
    children: [
      {
        label: '常見問答',
        key: 'helpCenter1'
      }
    ]
  },
  {
    label: '通知中心',
    key: 'notifyCenter',
    icon: renderIcon(ChatboxIcon),
    children: [
      {
        label: "訊息通知",
        key: 'notifyCenter1'
      }
    ]
  },
  {
    label: '電子發票',
    key: 'invCenter',
    icon: renderIcon(PostIcon),
    children: [
      {
        label: "發票查詢",
        key: 'invCenter1'
      }
    ]
  },
  {
    label: '捐款',
    key: 'donateCenter',
    icon: renderIcon(AttachMoneyIcon),
    children: [
      {
        label: "捐款查詢",
        key: 'donateCenter1'
      }
    ]
  },
  {
    label: '物流',
    key: 'logisticsCenter',
    icon: renderIcon(ShoppingCartIcon),
    children: [
      {
        label: "物流查詢",
        key: 'logisticsCenter1'
      }
    ]
  },
  {
    label: '金流',
    key: 'paymentFlow',
    icon: renderIcon(StackedLineChartIcon),
    children: [
      {
        label: "金流查詢",
        key: 'paymentFlow1'
      }
    ]
  }
]

</script>

<style scoped>
.accordionMenu {
  width:272px;
  min-height: 100vh;
  padding-bottom: 15px;
  background: linear-gradient(205deg, #3B82F6 -36.4%, #397EF2 -31.69%, #377AED -26.99%, #3676E9 -22.29%, #3472E4 -17.58%, #326DE0 -12.88%, #3069DB -8.18%, #2E65D7 -3.48%, #2D61D3 1.23%, #2B5DCE 5.93%, #2959CA 10.63%, #2755C5 15.34%, #2551C1 20.04%, #234CBC 24.74%, #2248B8 29.45%, #2044B3 34.15%, #1E40AF 38.85%);
}

.n-menu-item-content-header{
  padding-left: 50px;
}

@media (max-width: 768px) {
/* .accordionMenu {
    width: 100%;
  } */
}
</style>