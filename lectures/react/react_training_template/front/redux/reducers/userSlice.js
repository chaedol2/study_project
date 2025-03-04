import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import userApi from "../../apis/userApi";

//GET select fetch users
const asyncUsersFetch = createAsyncThunk(
  "userSlice/asyncUpFetch",
  async (currentPage) => {
    try {
      const response = await userApi.get(`/users?page=${currentPage - 1}`);
      return response.data;
    } catch (err) {
      console.log("asyncUsersFetch ERROR : ", err);
    }
  }
);

//GET select search user
const getSearchUsersByKeyword = createAsyncThunk(
  "userSlice/getSearchUsersByKeyword",
  async ({ keyword }) => {
    try {
      const response = await userApi.get(`/users?keyword=${keyword}`);
      return response.data;
    } catch (err) {
      console.log("getSearchUsersByKeyword ERROR : ", err);
    }
  }
);

//GET select user
const getSearchUserById = createAsyncThunk(
  "userSlice/getSearchUserById",
  async (id) => {
    try {
      const response = await userApi.get(`/users/${id}`);

      return response.data;
    } catch (err) {
      console.log("getSearchUserById ERROR : ", err);
    }
  }
);

//PUT create user
const putCreateUserByValues = createAsyncThunk(
  "userSlice/putCreateUserByValues",
  async (values) => {
    try {
      const response = await userApi.put("/users", values);

      return response.data;
    } catch (err) {
      console.log("putCreateUserByValues ERROR : ", err);
    }
  }
);

//PUT update user
const putUpdateUserByIdAndValues = createAsyncThunk(
  "userSlice/putUpdateUserByIdAndValues",
  async (values) => {
    try {
      const response = await userApi.put(`/users/${values.id}`, values);

      return response.data;
    } catch (err) {
      console.log("putUpdateUserByIdAndValues ERROR : ", err);
    }
  }
);

//DELETE delete user
const deleteUserById = createAsyncThunk(
  "userSlice/deleteUserById",
  async (id) => {
    try {
      const response = await userApi.delete(`/users/${id}`);

      return response.data;
    } catch (err) {
      console.log("deleteUserById ERROR : ", err);
    }
  }
);

const userSlice = createSlice({
  name: "userSlice",
  initialState: {
    value: [],
    status: "Welcome",
  },
  extraReducers: {
    //   builder.addCase(asyncUsersFetch.pending, (state, action) => {
    //     state.status = "Loading";
    //   });
    //   builder.addCase(asyncUsersFetch.fulfilled, (state, action) => {
    //     state.value = action.payload;
    //     state.status = "complete";
    //   });
    //   builder.addCase(asyncUsersFetch.rejected, (state, action) => {
    //     state.status = "fail";
    //   });
    // };
    [asyncUsersFetch.pending]: (state, action) => {
      state.status = "Loading";
    },
    [asyncUsersFetch.fulfilled]: (state, action) => {
      state.value = action.payload;
      state.status = "complete";
    },
    [asyncUsersFetch.rejected]: (state, action) => {
      state.status = "fail";
    },
    [getSearchUsersByKeyword.pending]: (state, action) => {
      state.status = "Loading";
    },
    [getSearchUsersByKeyword.fulfilled]: (state, action) => {
      state.value = action.payload;
      state.status = "complete";
    },
    [getSearchUsersByKeyword.rejected]: (state, action) => {
      state.status = "fail";
    },
    [getSearchUserById.pending]: (state, action) => {
      state.status = "Loading";
    },
    [getSearchUserById.fulfilled]: (state, action) => {
      state.value = action.payload;
      state.status = "complete";
    },
    [getSearchUserById.rejected]: (state, action) => {
      state.status = "fail";
    },
    [putCreateUserByValues.pending]: (state, action) => {
      state.status = "Loading";
    },
    [putCreateUserByValues.fulfilled]: (state, action) => {
      state.value += action.payload;
      state.status = "complete";
    },
    [putCreateUserByValues.rejected]: (state, action) => {
      state.status = "fail";
    },
    [putUpdateUserByIdAndValues.pending]: (state, action) => {
      state.status = "loading";
    },
    [putUpdateUserByIdAndValues.fulfilled]: (state, action) => {
      state.value = action.payload;
      state.status = "complete";
    },
    [putUpdateUserByIdAndValues.rejected]: (state, action) => {
      state.status = "fail";
    },
    [deleteUserById.pending]: (state, action) => {
      state.status = "loading";
    },
    [deleteUserById.fulfilled]: (state, action) => {
      state.value = action.payload;
      state.status = "complete";
    },
    [deleteUserById.rejected]: (state, action) => {
      state.status = "fail";
    },
  },
});
export default userSlice;
// export const { up, set } = userSlice.actions;
export {
  asyncUsersFetch,
  getSearchUsersByKeyword,
  getSearchUserById,
  putCreateUserByValues,
  putUpdateUserByIdAndValues,
  deleteUserById,
};
