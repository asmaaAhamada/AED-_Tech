import { createSlice } from "@reduxjs/toolkit";

const getInitialMode = () => {
  const savedMode = localStorage.getItem("themeMode");

  if (savedMode === "light" || savedMode === "dark") {
    return savedMode;
  }

  return "dark";
};

const themeSlice = createSlice({
  name: "theme",

  initialState: {
    mode: getInitialMode(),
  },

  reducers: {
    toggleTheme: (state) => {
      state.mode = state.mode === "dark" ? "light" : "dark";
    },

    setThemeMode: (state, action) => {
      if (action.payload === "dark" || action.payload === "light") {
        state.mode = action.payload;
      }
    },
  },
});

export const {
  toggleTheme,
  setThemeMode,
} = themeSlice.actions;

export default themeSlice.reducer;