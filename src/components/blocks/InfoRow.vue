<template>
    <div class="info-row">
        <div class="info-row__title">{{ title }}</div>
        <div class="info-row__description">{{ description }}</div>
    </div>
</template>

<script setup>

defineProps({
    title: String,
    description: String
})

</script>

<style scoped lang="scss">
    @import "@/css/settings.scss";

    .info-row {
        display: flex;
        font-size: $text-size-sm;

        &__title {
            font-weight: bold;
            margin-right: 10px;
        }
    }

</style>
