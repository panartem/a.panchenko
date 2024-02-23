<template>
    <header class="header">
        <img src="@/assets/images/logo.svg" alt="Жилфонд">
        <div class="header__aside">
            Пользователь
        </div>
    </header>
</template>

<script>
export default {
    name: "TheHeader"
}

</script>

<style scoped lang="scss">
    @import "@/css/settings.scss";

    .header {
        padding-top: 50px;
        padding-bottom: 28px;
        display: flex;
        justify-content: space-between;

        &__aside {
            margin-top: -6px;
            color: $color-gray-500;
        }
    }
</style>
