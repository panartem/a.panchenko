<template>
    <div class="app">
        <TheHeader></TheHeader>
        <Dashboard>
            <template v-slot:aside>
                <SearchBlock></SearchBlock>
            </template>
            <UserDetail></UserDetail>
        </Dashboard>
    </div>
</template>

<script setup>
import TheHeader from "@/components/TheHeader.vue";
import Dashboard from "@/components/blocks/Dashboard.vue";
import UserDetail from "@/components/modules/UserDetail.vue";
import SearchBlock from "@/components/modules/SearchBlock.vue";

</script>

<style lang="scss" scoped>
    @import "@/css/settings.scss";

    .app {
        display: flex;
        flex-direction: column;
        height: 100vh;
        width: 100%;
        max-width: $container-width;
        margin-left: auto;
        margin-right: auto;
        padding: 50px 50px 58px;
        box-sizing: border-box;
    }
</style>
