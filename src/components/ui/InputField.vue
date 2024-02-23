<template>
    <input
        v-model="input"
        class="input-field"
        type="text"
        :placeholder="placeholder"
    >
</template>

<script setup>

defineProps({
    placeholder: String
})

const input = defineModel()

</script>

<style scoped lang="scss">
    @import "@/css/settings.scss";

    .input-field {
        flex-shrink: 0;
        height: 46px;
        border-radius: 8px;
        border: 1px solid $color-gray-300;
        background: white;
        padding: 0 16px;
    }
    .input-field::placeholder {
        font-family: $font-montserrat;
        font-size: $text-size-sm;
    }
</style>
