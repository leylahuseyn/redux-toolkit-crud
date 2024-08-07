import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { deleteCategory, fetchCategories, createCategory, editCategory, getCategory } from "../../api";

export const fetchCategoriesAsync = createAsyncThunk(
  "categories/fetchCategories",
  async () => {
    const response = await fetchCategories();
    return response.data;
  }
);

export const createCategoriesAsync = createAsyncThunk(
  "categories/createCategory",
  async (category) => {
    const response = await createCategory(category);
    return response.data;
  }
);

export const editCategoriesAsync = createAsyncThunk(
  "categories/editCategory",
  async (category) => {
    const response = await editCategory(category);
    return response.data;
  }
);

const initialState = {
  value: [],
  status: "idle",
  error: null,
};

export const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    setCategories: (state, action) => {
      state.value = action.payload;
    },
    deleteCategories: (state, action) => {
      deleteCategory(action.payload);
      state.value = state.value.filter((category) => category.id !== action.payload);
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
      })
      .addCase(createCategoriesAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(createCategoriesAsync.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.value.push(action.payload);
      })
      .addCase(createCategoriesAsync.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(editCategoriesAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(editCategoriesAsync.fulfilled, (state, action) => {
        state.status = "succeeded";
        const index = state.value.findIndex(category => category.id === action.payload.id);
        if (index !== -1) {
          state.value[index] = action.payload;
        }
      })
      .addCase(editCategoriesAsync.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { setCategories, deleteCategories } = categoriesSlice.actions;

export default categoriesSlice.reducer;
