import { configureStore } from "@reduxjs/toolkit"
import sidebarReducer from "../features/sidebar/sidebarSlice"
import paymentReducer from "../features/payment/paymentSlice"

export const store = configureStore({
  reducer: {
    sidebar: sidebarReducer,
    payment: paymentReducer,
  },
})
