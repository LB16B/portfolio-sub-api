import CategoryAgesPage  from "../pages/CategoryAges/CategoryAgesPage.vue";
import HomePage from '../pages/HomePage.vue'
import ReviewPage from '../pages/Reviews/ReviewPage.vue'

const routes = [
    {
        path: "/",
        component: HomePage,
        name: 'home',
    },
    {
        path: "/review",
        component: ReviewPage,
        name: 'review',
    },
    {
        path: "/category_ages",
        component: CategoryAgesPage,
        name: 'category_ages'
    }
];
export default routes