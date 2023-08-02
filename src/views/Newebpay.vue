<template>
    <div style="display:flex; min-height: 100vh;">
        <!-- <n-layout has-sider>
            <n-layout-sider
                bordered
                collapse-mode="width"
                :collapsed-width="64"
                :width="262"
                show-trigger
            > -->
                <Menu />
            <!-- </n-layout-sider> -->
            <main class="main-container">
                <Header />
                <Body style="flex-grow: 1; min-height: calc(100% - 50px - 50px);"/>
                <Footer style="margin-top: auto;"/>
            </main>
        <!-- </n-layout> -->
    </div>
</template>

<script setup>
import Menu from "../components/Menu.vue";
import Header from "../components/Header.vue";
import Body from "../components/Body.vue";
import Footer from "../components/Footer.vue";
</script>

<style scoped>
.main-container {
    display: flex;
    flex-direction: column;
    flex: 1;
    min-height: 100%;
    background-color: #E5E7EB;
}


@media (max-width: 768px) {

}


</style>
