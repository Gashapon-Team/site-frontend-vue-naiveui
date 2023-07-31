<script setup>
// import { RouterLink, RouterView } from 'vue-router'
// import HelloWorld from './components/HelloWorld.vue'
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

// Menu bg
// background: linear-gradient(205deg, #3B82F6 -36.4%, #397EF2 -31.69%, #377AED -26.99%, #3676E9 -22.29%, #3472E4 -17.58%, #326DE0 -12.88%, #3069DB -8.18%, #2E65D7 -3.48%, #2D61D3 1.23%, #2B5DCE 5.93%, #2959CA 10.63%, #2755C5 15.34%, #2551C1 20.04%, #234CBC 24.74%, #2248B8 29.45%, #2044B3 34.15%, #1E40AF 38.85%);

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
