import { ref, reactive, computed } from "vue";
import { defineStore } from "pinia";
import { allCategories } from "../http/category-api";

export const useCategoryStore = defineStore('categoryStore', () => {
    const categories = ref([]);

    const fetchAllCategories = async () => {
        const { data } = await allCategories();
        categories.value = data.data;
    }


    return {
        categories,
        fetchAllCategories,
    };
});