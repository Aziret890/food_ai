import { createSlice } from "@reduxjs/toolkit"
import { ICards } from "../components/types/types"

export interface CartSliceStateType {
    cart: boolean
    cartData: Array<ICards>
    counter: Array<number>
    cartDelivery: boolean
    totalPrice: Array<number>
    uniqueEl: Array<ICards>
}

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        cart: false,
        cartData: [],
        counter: [0],
        cartDelivery: true,
        totalPrice: [0],
        uniqueEl: [],
    },
    reducers: {
        setCart: (state, action) => {
            state.cart = action.payload
        },
        setUnqueEl: (state, action) => {
            state.uniqueEl = action.payload
        },

        setCartData: (state, action) => {
            state.cartData = action.payload
        },
        setCartDelivery: (state, action) => {
            state.cartDelivery = action.payload
        },
        setTotalPrice: (state, action) => {
            const { id, price } = action.payload
            // console.log("reducer " + id)
            if (!state.totalPrice[id]) {
                state.totalPrice[id] = 0
            }
            state.totalPrice[id] = state.counter[id] * price
        },

        // Как получать уникальный counter для каждого отдельного компонента ПОЙМИ КАК РАБОТАЕТ
        setCounter: (state, action) => {
            const { id } = action.payload
            // console.log("reducer " + id)
            if (!state.counter[id]) {
                state.counter[id] = 0
            }
            state.counter[id]++
        },
        setQuantityCounter: (state, action) => {
            const { id, count } = action.payload
            if (!state.counter[id]) {
                state.counter[id] = 0
            }
            state.counter[id] += count
        },
        setCounterMinus: (state, action) => {
            const { id } = action.payload
            // console.log("reducer " + id)
            if (!state.counter[id]) {
                state.counter[id] = 0
            }
            if (state.counter[id] > 1) {
                state.counter[id]--
            }
        },
        setCounterPlus: (state, action) => {
            const { id } = action.payload
            // console.log("reducer " + id)
            if (!state.counter[id]) {
                state.counter[id] = 0
            }
            state.counter[id]++
        },
    },
})

export const {
    setCart,
    setCartData,
    setCounter,
    setQuantityCounter,
    setCounterMinus,
    setCounterPlus,
    setCartDelivery,
    setTotalPrice,
    setUnqueEl,
} = cartSlice.actions
export default cartSlice.reducer
