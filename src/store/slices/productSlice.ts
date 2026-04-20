import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IProductState {
  products: IProductData[];
  links: ILinks | null;
  meta: IMeta | null;
  nextLink: string | null;
  gender: string | null;
  loading: boolean;
  error: string | null;
}

export const productInitialState: IProductState = {
  products: [],
  links: null,
  meta: null,
  nextLink: null,
  gender: null,
  loading: false,
  error: null,
};

const productSlice = createSlice({
  name: "products",
  initialState: productInitialState,
  reducers: {
    setProductLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },

    setProductError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },

    setProductGender: (state, action: PayloadAction<string | null>) => {
      state.gender = action.payload;
    },

    setProducts: (state, action: PayloadAction<IProductResponse>) => {
      state.products = action.payload.data;
      state.links = action.payload.links;
      state.meta = action.payload.meta;
      state.nextLink = action.payload.links.next;
      state.loading = false;
      state.error = null;
    },

    appendProducts: (state, action: PayloadAction<IProductResponse>) => {
      state.products = [...state.products, ...action.payload.data];
      state.links = action.payload.links;
      state.meta = action.payload.meta;
      state.nextLink = action.payload.links.next;
      state.loading = false;
      state.error = null;
    },

    setNextLink: (state, action: PayloadAction<string | null>) => {
      state.nextLink = action.payload;
    },

    resetProducts: (state) => {
      state.products = [];
      state.links = null;
      state.meta = null;
      state.nextLink = null;
      state.loading = false;
      state.error = null;
    },
  },
});

export const {
  setProductLoading,
  setProductError,
  setProductGender,
  setProducts,
  appendProducts,
  setNextLink,
  resetProducts,
} = productSlice.actions;

export default productSlice.reducer;
