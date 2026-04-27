import axios from "axios";

export const api = axios.create({
    baseURL: "https://congenial-yodel-7v56gjx979v9fpv7g-3000.app.github.dev/",
});

api.interceptors.response.use(
    (response) => response,
    (error) =>{
        console.error("Erro na API:", error.response?.data || error.message);
        return Promise.reject(error)
    }
)