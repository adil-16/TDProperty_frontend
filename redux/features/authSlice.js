import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { loadUserApi } from "@/api/Property/CommonForAllUsers/Profile/commonUsersProfileApi";
import Cookies from "js-cookie";

export const fetchUserDetails = createAsyncThunk(
  "user/fetchUserDetails",
  async (_, { rejectWithValue }) => {
    try {
      const data = await loadUserApi();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

const initialState = {
  user: {},
  loading: false,
  isAuthenticated: false,
  error: null,
};

const auth = createSlice({
  name: "auth",
  initialState,
  reducers: {
    register: (state, action) => {
      state.user = action.payload;
      state.loading = false;
      state.isAuthenticated = true;
    },
    login: (state, action) => {
      state.user = action.payload;
      state.loading = false;
      state.isAuthenticated = true;
    },
    logout: (state) => {
      Cookies.remove("token");
      return initialState;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserDetails.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchUserDetails.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.isAuthenticated = true;
      })
      .addCase(fetchUserDetails.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { register, login, logout } = auth.actions;

export default auth.reducer;
