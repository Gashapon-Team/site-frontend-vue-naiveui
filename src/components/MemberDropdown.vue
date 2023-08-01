<template>
    <n-dropdown
      :options="options"
      placement="bottom-start"
      trigger="click"
      @select="handleSelect"
    >
      <n-button quaternary type="primary">
        {{ memberName }}
        <n-icon :color="primaryColor" size="24"><ArrowDropDownSharp /></n-icon>
      </n-button>
    </n-dropdown>
  </template>
  
  <script setup>
  import { h, ref } from "vue";
  import { NIcon, useMessage } from "naive-ui";
  import { ArrowDropDownSharp } from '@vicons/material'
  

  const memberName = ref("CheriHsu's Shop")
  const primaryColor = "#3755BB"

  const options = [
    {
      label: "會員基本資料",
      key: "member"
    },
    {
      label: "應用設定",
      key: "setting"
    },
    {
      type: "divider",
      key: "d1"
    },
    {
      label: "其他",
      key: "others",
      children: [
        {
          label: "其他一",
          key: "others1"
        },
        {
          label: "其他二",
          key: "others2",
          children: [
            {
              label: "其他二子",
              key: "others2c"
            },
          ]
        },
        {
          label: "敬請期待",
          key: "others3",
          disabled: true,
        }
      ]
    },
    {
      label: "登出",
      key: "logout"
    },
  ];
  
  const message = useMessage();
  
  const handleSelect = (key) => {
    message.info(String(key));
  };
  </script>
  