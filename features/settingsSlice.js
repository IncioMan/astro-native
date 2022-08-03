import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  settings: {
    slippage: 0.1
  }
}

export const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    setSettings: (state, action) => {
        state.settings = action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { setSettings } = settingsSlice.actions
export const selectSettings = state => state.settings

export default settingsSlice.reducer