import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { deleteCategory, fetchCategories, createCategory } from "../../api";


export const fetchCategoriesAsync = createAsyncThunk(
  "products/fetchCategories",
  async () => {
    const response = await fetchCategories();
    return response.data;
  }
);

const initialState = {
  value: [],
  status: "idle",
  error: null,
};

export const categoriesSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setCategories: (state, action) => {
      state.value = action.payload;
    },
    createCategories: (state, action) => {
      createCategory(action.payload);
      state.value.push(action.payload);
    },
    deleteCategories: (state, action) => {
      deleteCategory(action.payload);
      state.value = state.value.filter((user) => user.id !== action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategoriesAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchCategoriesAsync.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.value = action.payload;
      })
      .addCase(fetchCategoriesAsync.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { setCategories, deleteCategories, createCategories } =
  categoriesSlice.actions;

export default categoriesSlice.reducer;
