import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: ISettingsState = {
  dataFetched: false,
  general: {
    name: "General",
    slug: "general",
    items: [],
  },
  social: {
    name: "Social",
    slug: "social",
    items: [],
  },
};

const settingsSlice = createSlice({
  name: "settings",
  initialState,
  reducers: {
    setSettings: (state, action: PayloadAction<ISettingsSchema>) => {
      return {
        ...state,
        ...action.payload,
      };
    },
    setFetchedStatus: (state, action: PayloadAction<boolean>) => {
      state.dataFetched = action.payload;
    },
  },
});

export const { setSettings, setFetchedStatus } = settingsSlice.actions;
export default settingsSlice.reducer;
