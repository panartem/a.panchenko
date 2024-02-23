<template>
    <aside class="search-block">
        <div class="search-block__title search-block__title_gap_md">
            Поиск сотрудников
        </div>
        <InputField v-model="searchInputData" class="search-block__input" placeholder="Введите Id или имя "></InputField>
        <div class="search-block__title search-block__title_gap_sm">
            Результаты
        </div>
        <div v-if="loadingData.isLoading && !loadingData.isMore" class="search-block__loader">
            <LoaderSpinner class="search-block__spinner"></LoaderSpinner>
        </div>
        <template v-else>
            <div v-if="!searchInputData" class="search-block__info">
                начните поиск
            </div>
            <template v-else>
                <div v-if="resultList && resultList.length > 0" class="search-block__results">
                    <UserItemCard
                        v-for="(user , index) in resultList"
                        v-intersection-observer="onIntersectionObserver"
                        @click="changeUser(user)"
                        :class="{
                            'active': activeUser && activeUser.id === user.id
                        }"
                        :data-index="index"
                        :key="user.id"
                        :title="user.username"
                        :description="user.email"
                    ></UserItemCard>
                </div>
                <div v-else class="search-block__info">
                    ничего не найдено
                </div>
            </template>
        </template>
    </aside>
</template>

<script setup>
import {ref, computed, watch, reactive} from "vue";
import { vIntersectionObserver } from '@vueuse/components'

import store from "@/store.js";

import UserService from "@/services/Users.js";
import debounce from 'lodash.debounce';
import InputField from "@/components/ui/InputField.vue";
import UserItemCard from "@/components/blocks/UserItemCard.vue";
import LoaderSpinner from "@/components/ui/LoaderSpinner.vue";

const searchInputData = ref('');
const pagination = reactive({
    start: 0,
    limit: 20
})
const resultList = ref([]);
const loadingData = reactive({
    isLoading: false,
    isMore: false
});

const searchingBy = computed(() => {
    let result = 'username';

    if (!!(/[0-9]/.test(searchInputData.value))) {
        result = 'id';
    }

    return result;
});

const resetPagination = () => {
    pagination.start = 0;
}

const activeUser = computed(() => {
    return store.getters.activeUser;
});

const resultListLength = computed(() => {
    return resultList.value.length;
});

const changeUser = (user) => {
    store.dispatch('setUser', user)
}

const loadUsers = async (searchingBy, value, paginationStart, paginationEnd, isMore  = false) => {
    loadingData.isLoading = true;
    loadingData.isMore = isMore;

    const { data } = await UserService.getUsersByValues(searchingBy, value, paginationStart, paginationEnd);

    loadingData.isLoading = false;
    loadingData.isMore = false;

    return data;
}

const setUsersToResultList = (data, isMore) => {
    if (isMore) {
        resultList.value = resultList.value.concat(data);
    } else {
        resultList.value = data;
    }
}

const fetchUsers  = async (searchingBy, value, paginationStart, paginationEnd, isMore = false) => {
    const data = await loadUsers(searchingBy, value, paginationStart, paginationEnd, isMore);
    setUsersToResultList(data, isMore);
}

watch(searchInputData, debounce(async (value) => {
    resetPagination();

    if (value) {
        await fetchUsers(searchingBy.value, value, pagination.start, pagination.limit)
    } else {
        resultList.value = [];
        changeUser(null);
    }
}, 500));

function onIntersectionObserver([{ isIntersecting, target}]) {
    const index = parseInt(target.dataset.index);

    if (isIntersecting && index === (resultListLength.value - 1)) {
        pagination.start = pagination.start + pagination.limit;
        fetchUsers(searchingBy.value, searchInputData.value, pagination.start, pagination.limit, true)
    }
}

</script>

<style scoped lang="scss">
    @import "@/css/settings.scss";

    .search-block {
        display: flex;
        flex-direction: column;
        padding: 27px 31px 27px 20px;
        background: $color-gray-100;

        &__loader {
            display: flex;
            justify-content: center;
        }

        &__spinner {
            margin-top: 16px;
        }

        &__title {
            font-size: $text-size-base;
            font-weight: 600;
        }

        &__title_gap_md {
            margin-bottom: 22px;
        }

        &__title_gap_sm {
            margin-bottom: 10px;
        }

        &__input {
            margin-bottom: 22px;
        }

        &__info {
            font-size: $text-size-sm;
            color: $color-gray-300;
        }

        &__results {
            display: flex;
            flex-direction: column;
            gap: 18px;
        }
    }
</style>
