<template>
    <div class="user-detail-card">
        <div class="user-detail-card__image" :style="`background-image: url(${image});`"></div>
        <div>
            <div class="user-detail-card__title user-detail-card__name">
                {{ name }}
            </div>
            <InfoRow
                class="user-detail-card__row"
                title="email:"
                :description=email
            ></InfoRow>
            <InfoRow
                class="user-detail-card__row"
                title="phone:"
                :description=phone
            ></InfoRow>
            <div class="user-detail-card__title user-detail-card__about">
                О себе:
            </div>
            <div class="user-detail-card__description">
                {{ description }}
            </div>
        </div>
    </div>
</template>

<script setup>
    import InfoRow from "@/components/blocks/InfoRow.vue";

    defineProps({
        name: String,
        email: String,
        phone: String,
        description: String,
        image: {
            type: String,
            default: "/src/assets/images/image-plug.svg"
        }
    })
</script>

<style scoped lang="scss">
    @import "@/css/settings.scss";

    .user-detail-card {
        display: flex;

        &__image {
            width: 424px;
            height: 286px;
            margin-right: 61px;
            flex-shrink: 0;
            border: 1px solid $color-gray-200;
        }

        &__title {
            font-weight: 600;
        }

        &__name {
            margin-bottom: 12px;
        }

        &__about {
            margin-top: 22px;
            margin-bottom: 26px;
        }

        &__row {
            margin-bottom: 14px;
        }

        &__description {
            font-size: 14px;
        }
    }
</style>
