import { UserInfo } from "@/models";
import { createSlice } from "@reduxjs/toolkit";

export const emptyUserState: UserInfo = {
  _id: "",
  name: "",
  email: "",
  avatarUrl: "",
  rol: "",
  accessToken: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState: emptyUserState,
  reducers: {
    createUser: (state, action) => action.payload,
    updateUser: (state, action) => ({ ...state, ...action.payload }),
    resetUser: () => emptyUserState,
  },
});

export const { createUser, updateUser, resetUser } = userSlice.actions;

export default userSlice.reducer;
