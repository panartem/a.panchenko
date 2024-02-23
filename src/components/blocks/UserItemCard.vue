<template>
    <article class="user-item-card">
        <div class="user-item-card__minor">
            <div class="user-item-card__image" :style="`background-image: url(${image});`"></div>
        </div>
        <div class="user-item-card__major">
            <div class="user-item-card__title">{{ title }}</div>
            <div class="user-item-card__description">{{ description }}</div>
            <div></div>
        </div>
    </article>
</template>

<script setup>
    defineProps({
        title: String,
        description: String,
        image: {
            type: String,
            default: "/src/assets/images/image-plug-xs.svg"
        }
    })
</script>

<style scoped lang="scss">
    @import "@/css/settings.scss";

    .user-item-card {
        cursor: pointer;
        display: flex;
        border-radius: 10px;
        filter: drop-shadow(0 0 10px rgba(#000000, 0.1));
        background: $color-white;
        overflow: hidden;
        height: 70px;

        &__minor {
            position: relative;
            flex-shrink: 0;
            width: 70px;
            border-right: 1px solid $color-gray-200;
        }

        &__image {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-size: contain;
            background-position: center;
            background-repeat: no-repeat;
        }

        &__major {
            flex: 1 1 auto;
            padding: 15px;
            overflow: hidden;
        }

        &__title {
            font-weight: 600;
            margin-bottom: 5px;
        }

        &__description {
            text-overflow: ellipsis;
            overflow: hidden;
        }
    }

    .user-item-card:hover,
    .user-item-card.active {
        .user-item-card__major {
            background: $color-gray-200;
        }
    }
</style>
