import { createSlice } from "@reduxjs/toolkit"

export interface isActiveState {
    isActiveValue: boolean
}

const isActive = createSlice({
    name: "active",
    initialState: {
        isActiveValue: false,
    },
    reducers: {
        isTrue: (state) => {
            state.isActiveValue = true
        },
        isFalse: (state) => {
            state.isActiveValue = false
        },
    },
})

export const { isTrue, isFalse } = isActive.actions
export default isActive.reducer
