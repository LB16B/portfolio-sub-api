import { ref, reactive, computed } from "vue";
import { defineStore } from "pinia";
import { allReviews } from "../http/review-api";

export const useReviewStore = defineStore('reviewStore', () => {
    const reviews = ref([]);

    const fetchAllReviews = async () => {
        const { data } = await allReviews();
        reviews.value = data.data;
    }


    return {
        reviews,
        fetchAllReviews,
    };
});