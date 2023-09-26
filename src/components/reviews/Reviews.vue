<template>
    <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto">
            <div class="flex flex-wrap -m-4">
                <Review v-for="review in reviews" 
                    :review="review" 
                    :key="review.id" 
                />
            </div>
        </div>
    </section>

</template>

<script setup>
import { useReviewStore } from "../../stores/review";
import Review from "./Review.vue";

const reviewStore = useReviewStore()

defineProps({
    reviews: Array,
})
</script>