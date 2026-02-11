import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentLanguage: 'zh', // 默认中文
  languages: [
    { code: 'zh', name: '中文' },
    { code: 'ar', name: 'العربية' },
    { code: 'en', name: 'English' }
  ]
};

const languageSlice = createSlice({
  name: 'language',
  initialState,
  reducers: {
    setLanguage: (state, action) => {
      state.currentLanguage = action.payload;
    }
  }
});

export const { setLanguage } = languageSlice.actions;

export default languageSlice.reducer;