<template>
    <main>
        <CategoryAges :categories="categories" />
    </main>
</template>

<script setup>
import { onMounted, ref, computed } from "vue";
import { storeToRefs } from "pinia"
import { useCategoryStore } from "../../stores/category";
import CategoryAges from "../../components/categoryAges/CategoryAges.vue";
import api from "../../http/api";

const categoryStore = useCategoryStore()
const { categories } = storeToRefs(categoryStore)
const { fetchAllCategories } = categoryStore

onMounted(async () => {
    await fetchAllCategories()
});
</script>