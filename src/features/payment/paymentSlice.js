import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  planCost: 0,
  errorMessage: "",
  displayError: false,
}

const paymentSlice = createSlice({
  name: "payment",
  initialState,
  reducers: {
    updateBasicPlan: (state) => {
      state.planCost = 2500
    },
    updateProPlan: (state) => {
      state.planCost = 5000
    },
    updateDeluxePlan: (state) => {
      state.planCost = 22500
    },
    updateMVPPlan: (state) => {
      state.planCost = 100000
    },
    showError: (state, { payload }) => {
      state.errorMessage = payload
      state.displayError = true
    },
    hideError: (state) => {
      state.errorMessage = ""
      state.displayError = false
    },
  },
})

export const {
  updateBasicPlan,
  updateDeluxePlan,
  updateMVPPlan,
  updateProPlan,
  showError,
  hideError,
} = paymentSlice.actions

export default paymentSlice.reducer
