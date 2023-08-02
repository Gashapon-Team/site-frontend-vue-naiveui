<script setup>
import { computed } from 'vue'
import { useRoute, RouterView } from 'vue-router'
import DemoHeader from './components/DemoHeader.vue'

const route = useRoute()
const showHeader = computed(() => {
  return route.meta.showHeader
})



/**
 * Customizing theme
 * https://www.naiveui.com/en-US/light/docs/customize-theme
 * @type import('naive-ui').GlobalThemeOverrides
 */

const primaryColor = '#3755BB'

const themeOverrides = {
  common: {
    primaryColor: primaryColor,
    primaryColorHover: '#3181E0',
    primaryColorPressed: '#2F2AB7FF',
    primaryColorSuppl: '#3656ADFF'
  },
  Button: {
    textColor: primaryColor
  },
  Select: {
    peers: {
      InternalSelection: {
        textColor: primaryColor
      }
    }
  },
  Input: {
    peers: {
      InternalSelection: {
        textColor: primaryColor
      }
    }
  },
  Menu: {
    groupTextColor: '#FFF',
    itemIconColor: '#FFF',
    itemIconColorHover: '#FFF',
    itemIconColorChildActive: '#FFF',
    itemIconColorChildActiveHover: '#FFF',

    itemTextColor: '#FFF',
    itemTextColorHover: '#FFF',
    itemTextColorActive: '#FFF',
    itemTextColorActiveHover: '#FFF',
    itemTextColorChildActive: '#FFF',
    itemTextColorChildActiveHover: '#FFF',

    itemColorHover: '#002DC67A',
    itemColorActiveHover: '#002DC67A',
    itemColorActive: '#FFFFFF1A',

    arrowColor: '#FFF',
    arrowColorHover: '#FFF',
    arrowColorChildActive: '#FFF',
    arrowColorChildActiveHover: '#FFF',
  }
}
</script>

<template>

  <DemoHeader v-if="showHeader"/>

  <n-config-provider :theme-overrides="themeOverrides">
    <n-loading-bar-provider>
      <n-message-provider>
        <n-notification-provider>
          <n-dialog-provider>
            <RouterView />
          </n-dialog-provider>
        </n-notification-provider>
      </n-message-provider>
    </n-loading-bar-provider>
  </n-config-provider>
</template>
