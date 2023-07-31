<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'

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
  <header>
    <div class="wrapper">
      <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="100" height="100" />
      <img
        alt="Naive UI logo"
        class="logo"
        src="@/assets/naiveUi_logo.png"
        width="125"
        height="125"
      />
      <HelloWorld msg="Vue 3 & Naive UI DEMO" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/component-demo">Component Demo</RouterLink>
        <RouterLink to="/naive-ui-demo-form">Naive UI Form DEMO</RouterLink>
      </nav>
    </div>
  </header>

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

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    align-items: center;
    /* place-items: flex-start; */
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
