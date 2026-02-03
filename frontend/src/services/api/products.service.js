import axios from "./axiosConfig";

export const getProducts = async () => {
    const res = await axios.get("/products");
    return res.data;
};

export const createProduct = async (formData) => {
    try {
        const res = await axios.post("/products", formData, {
            headers: {"Content-Type": "multipart/form-data"}, 
        });
        return res.data;
    }catch (error) {
        if (error.response?.status === 409) {
            throw new Error("El nombre del producto ya esta en uso");
        }
        throw new Error("Error al guardar el producto");
    }
};

export const getRandomProducts = async () => {
  const res = await axios.get("/products/random");
  return res.data;
};

export const getProductById = async (id) => {
  const res = await axios.get(`/products/${id}`);
  return res.data;
};

export const getPaginatedProducts = async (page=0) => {
    const res = await axios.get(`/products?page=${page}&size=10`);
    return res.data;
};
