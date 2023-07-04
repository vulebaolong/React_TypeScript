import { BaseApi } from "./baseApi";
class ProductApi extends BaseApi {
    getAllProduct = () => {
        return this.get(`/Product`);
    };
    getOneProduct = (id:string) => {
        return this.get(`/Product/getbyid?id=${id}`);
    };
   
}

export const productApi = new ProductApi();
