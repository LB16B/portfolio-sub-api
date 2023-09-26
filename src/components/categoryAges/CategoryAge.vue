<template>
    <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
        <div class="mt-4">
            <p >{{ category }}</p>
        </div>
    </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { useCategoryStore } from "../../stores/category";


const props = defineProps({
    category: Object,
})

</script>