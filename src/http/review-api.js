import api from "./api";

const apiPath = import.meta.env.VITE_API_PATH
const resource = apiPath + "/reviews";

export const allReviews = () => api.get(resource);