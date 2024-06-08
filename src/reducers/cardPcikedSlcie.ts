import { createSlice } from "@reduxjs/toolkit"

export interface cardPickedState {
    pick: boolean
    which: number
    count: number
}

const cardPickedSlice = createSlice({
    name: "cardPicked",
    initialState: {
        pick: false,
        which: 0,
        count: 1,
    },
    reducers: {
        setPick: (state, action) => {
            state.pick = action.payload
        },
        whichId: (state, action) => {
            state.which = action.payload
        },
        incrementCount: (state) => {
            state.count += 1
        },
        decrementCount: (state) => {
            if (state.count > 1) {
                state.count -= 1
            }
        },
        resetCount: (state, action) => {
            state.count = action.payload
        },
    },
})

export const { setPick, whichId, incrementCount, decrementCount, resetCount } =
    cardPickedSlice.actions
export default cardPickedSlice.reducer
