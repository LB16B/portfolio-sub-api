import api from "./api";

const apiPath = import.meta.env.VITE_API_PATH
const resource = apiPath + "/category_ages";

export const allCategories = () => api.get(resource);