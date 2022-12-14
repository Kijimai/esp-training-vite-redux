import { configureStore } from "@reduxjs/toolkit"
import sidebarReducer from "../features/sidebar/sidebarSlice"
import paymentReducer from "../features/payment/paymentSlice"
import dashboardReducer from "../features/dashboard/dashboardSlice"

export const store = configureStore({
  reducer: {
    sidebar: sidebarReducer,
    payment: paymentReducer,
    dashboard: dashboardReducer
  },
})
