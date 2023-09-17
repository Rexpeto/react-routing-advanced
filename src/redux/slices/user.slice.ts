import { UserInfo } from "@/models";
import { clearLocalStorage, persistLocalStorage } from "@/utilities";
import { createSlice } from "@reduxjs/toolkit";

export const emptyUserState: UserInfo = {
  _id: "",
  name: "",
  email: "",
  avatarUrl: "",
  rol: "",
  accessToken: "",
};

export const userKey = "user";

export const userSlice = createSlice({
  name: "user",
  initialState: localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user") as string)
    : emptyUserState,
  reducers: {
    createUser: (state, action) => {
      persistLocalStorage<UserInfo>(userKey, action.payload);
      return action.payload;
    },
    updateUser: (state, action) => {
      const result = { ...state, ...action.payload };
      persistLocalStorage<UserInfo>(userKey, result);
      return result;
    },
    resetUser: () => {
      clearLocalStorage(userKey);
      return emptyUserState;
    },
  },
});

export const { createUser, updateUser, resetUser } = userSlice.actions;

export default userSlice.reducer;
