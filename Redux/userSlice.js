import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: "",
  name: "",
  like: [],
};

const userSlice = createSlice({
  name: "user",
  initialState,
});

export default userSlice.reducer;
