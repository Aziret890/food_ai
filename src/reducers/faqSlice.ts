import { createSlice } from "@reduxjs/toolkit"

export interface FaqSliceStateType {
    openFaq: Array<boolean>
}

const faqSlice = createSlice({
    name: "faq",
    initialState: {
        openFaq: [false],
    },
    reducers: {
        setOpenFaq: (state, action) => {
            const { id } = action.payload
            if (!state.openFaq[id]) {
                state.openFaq[id] = true
            } else {
                state.openFaq[id] = false
            }
        },
    },
})

export const { setOpenFaq } = faqSlice.actions
export default faqSlice.reducer
