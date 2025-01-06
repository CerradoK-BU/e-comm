import axios from "axios";

const REST_API_BASE_URL = 'http://localhost:8080/api/items';

export const listProducts = () => {
    return axios.get(REST_API_BASE_URL);
}

export const getProductsBySection = (section) => {
    return axios.get(`${REST_API_BASE_URL}/section?section=${section}`);
}

export const getProductsByCategorySection = (category, section) => {
    return axios.get(`${REST_API_BASE_URL}/categorysection?section=${section}&category=${category}`);
}


export const getProductsByCategory = (category) => {
    return axios.get(`${REST_API_BASE_URL}/category?category=${category}`);
}
