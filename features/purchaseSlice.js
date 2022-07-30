import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  purchase: null
}

export const purchaseSlice = createSlice({
  name: 'purchase',
  initialState,
  reducers: {
    addPurchase: (state, action) => {
        state.purchase = action.payload
    },
    resetPurchase: (state) => {
      state.purchase = null
    }
  },
})

// Action creators are generated for each case reducer function
export const { addPurchase, resetPurchase } = purchaseSlice.actions
export const selectPurchase = state => state.purchase

export default purchaseSlice.reducer