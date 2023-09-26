<template>
    <main>
        <Reviews :reviews="reviews" />
    </main>
</template>

<script setup>
import { onMounted, ref, computed } from "vue";
import { storeToRefs } from "pinia"
import { useReviewStore } from "../../stores/review";
import Reviews from '../../components/reviews/Reviews.vue'
import api from "../../http/api";

const reviewStore = useReviewStore()
const { reviews } = storeToRefs(reviewStore)
const { fetchAllReviews } = reviewStore

onMounted(async () => {
    await fetchAllReviews()
});
</script>