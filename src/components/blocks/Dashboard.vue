<template>
    <main class="dashboard">
        <div class="dashboard__aside">
            <slot name="aside"></slot>
        </div>
        <div class="dashboard__main">
            <slot></slot>
        </div>
    </main>
</template>

<script setup>

</script>

<style scoped lang="scss">
    @import "@/css/settings.scss";

    .dashboard {
        display: flex;
        flex: 1 1 auto;
        border-radius: 10px;
        filter: drop-shadow(0 0 10px rgba(#000000, 0.1));
        background: $color-white;
        overflow: hidden;

        &__aside {
            flex-shrink: 0;
            flex-grow: 0;
            width: 292px;
            border-right: 1px solid $color-gray-200;
            overflow: auto;
        }

        &__main {
            display: flex;
            flex-direction: column;
            flex: 1 1 auto;
            overflow: auto;
        }
    }
</style>
