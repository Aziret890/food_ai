import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { ICards } from "../components/types/types"

interface searchObject extends ICards {}

export interface searchState {
    input: string
    searchData: Array<searchObject>
    searchActive: boolean
}

const search = createSlice({
    name: "search",
    initialState: {
        input: "",
        searchData: [],
        searchActive: false,
    },
    reducers: {
        changeInput: (state, action) => {
            state.input = action.payload
        },
        setSearchData: (state, action) => {
            state.searchData = action.payload
        },
        setSearchActive: (state, action) => {
            state.searchActive = action.payload
        },
    },
})

export const { changeInput, setSearchData, setSearchActive } = search.actions
export default search.reducer
