import axios, { AxiosResponse } from "axios";
interface ProductInterface{
  name:string,
  image:string,
  price:string,
  brand:string,
  like:number,
  dislike:number
}
export const addProduct = async (name:string,image:string,brand:string,price:string) => {
  // Add product functionality here
  const obj : ProductInterface = {
    name,
    image,
    price,
    brand,
    like:0,
    dislike:0

  }
  const res:AxiosResponse<ProductInterface> = await axios.post(`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/products`,obj)
  
  
  
};

export const getProducts = async () => {
  
  const res  = await axios.get(`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/products`)
  return res.data
};

export const updateLike = () => {
  // Update like functionality
};

export const updateDisLike = () => {
  // Update dislike functionality
};

export const deleteProduct = () => {
  // Delete functionality
};
