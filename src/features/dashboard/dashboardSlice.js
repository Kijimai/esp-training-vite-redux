import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  coachId: null,
}

const dashboardSlice = createSlice({
  name: "dashboard",
  initialState,
  reducers: {
    updateCoachId: (state, { payload }) => {
      state.coachId = payload
    },
  },
})

export const { updateCoachId } = dashboardSlice.actions

export default dashboardSlice.reducer
