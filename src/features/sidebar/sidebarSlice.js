import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  isShowing: false,
}

const sidebarSlice = createSlice({
  name: "sidebar",
  initialState,
  reducers: {
    showSidebar: (state) => {
      state.isShowing = true
    },
    hideSidebar: (state) => {
      state.isShowing = false
    },
  },
})

export const { showSidebar, hideSidebar } = sidebarSlice.actions

export default sidebarSlice.reducer
