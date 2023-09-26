<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light border-bottom">
        <div class="container py-2">


            <div  id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <router-link 
                        :to="{ name: 'category_ages' }"
                        class="mr-5 hover:text-gray-900"
                        >
                        CategoryAges
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link 
                        :to="{ name: 'review' }"
                        class="mr-5 hover:text-gray-900"
                        >
                        Review
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <a href="#" class="nav-link">Summary</a>
                    </li>
                </ul>
                
            </div>
        </div>
    </nav>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router';


</script>