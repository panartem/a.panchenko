<template>
    <div class="user-detail">
        <UserDetailCard
            v-if="activeUser"
            :name="activeUser.name"
            :email="activeUser.email"
            :phone="activeUser.phone"
            :description="activeUser.company.catchPhrase"
        ></UserDetailCard>
        <div v-else class="user-detail__info">
            Выберите сотрудника, чтобы посмотреть его профиль
        </div>
    </div>
</template>

<script setup>
import UserDetailCard from "@/components/blocks/UserDetailCard.vue";
import store from "@/store.js";
import {computed} from "vue";

const activeUser = computed(() => {
    return store.getters.activeUser;
});

</script>

<style scoped lang="scss">
        @import "@/css/settings.scss";

    .user-detail {
        flex: 1 1 auto;
        display: flex;
        padding: 30px 30px 30px 21px;

        &__info {
            flex: 1 1 auto;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: $text-size-sm;
            color: $color-gray-300;
        }
    }
</style>
