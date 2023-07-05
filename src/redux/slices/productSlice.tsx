import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { DispatchType } from "../store";
import { productApi } from "../../api/productApi";

export interface ProductModel {
    id: number;
    name: string;
    alias: string;
    price: number;
    description: string;
    size: string;
    shortDescription: string;
    quantity: number;
    deleted: boolean;
    categories: string;
    relatedProducts: string;
    feature: boolean;
    image: string;
}
export interface ProductDetailModel {
    id: number;
    name: string;
    alias: string;
    price: number;
    feature: boolean;
    description: string;
    size: string[];
    shortDescription: string;
    quantity: number;
    image: string;
    categories: Category[];
    relatedProducts: RelatedProduct[];
}
export interface Category {
    id: string;
    category: string;
}
export interface RelatedProduct {
    id: number;
    name: string;
    alias: string;
    feature: boolean;
    price: number;
    description: string;
    shortDescription: string;
    image: string;
}

export type ProductStateType = {
    listProduct: ProductModel[];
    productDetail: ProductDetailModel | null;
};

const initialState: ProductStateType = {
    listProduct: [],
    productDetail: null,
};

const productSlice = createSlice({
    name: "productSlice",
    initialState,
    reducers: {
        getAllProductREDU: (
            state: ProductStateType,
            action: PayloadAction<ProductModel[]>
        ) => {
            const { payload } = action;
            state.listProduct = payload;
        },
        getOneProductREDU: (
            state: ProductStateType,
            action: PayloadAction<ProductDetailModel>
        ) => {
            const { payload } = action;
            state.productDetail = payload;
        },
    },
});

export const { getAllProductREDU, getOneProductREDU } = productSlice.actions;

export default productSlice.reducer;

// =======================MID ========================
//getAllProductMID
export const getAllProductMID = () => {
    return async (dispatch: DispatchType) => {
        const { data, status } = await productApi.getAllProduct();
        console.log("getAllProductMID", { data, status });

        const result: ProductModel[] = data.content;

        const action: PayloadAction<ProductModel[]> = getAllProductREDU(result);
        dispatch(action);
    };
};

//getOneProductMID
export const getOneProductMID = (id: string) => {
    return async (dispatch: DispatchType) => {
        const { data, status } = await productApi.getOneProduct(id);
        console.log("getOneProductMID", { data, status });
        const result: ProductDetailModel = data.content;
        const action:PayloadAction<ProductDetailModel> = getOneProductREDU(result)
        dispatch(action);
    };
};
