import { createSlice } from "@reduxjs/toolkit"

export interface navSliceStateType {
    show: boolean
}

const navSlice = createSlice({
    name: "nav",
    initialState: {
        show: false,
    },
    reducers: {
        // setShow: (state) => {
        //     state.show = state.show ? false : true
        // },
        setShow: (state, action) => {
            state.show = action.payload
        },
    },
})

export const { setShow } = navSlice.actions
export default navSlice.reducer
