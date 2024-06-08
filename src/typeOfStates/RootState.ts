import { isActiveState } from "../reducers/isActiveSlice"
import { searchState } from "../reducers/serachSlice"
import { cardPickedState } from "../reducers/cardPcikedSlcie"
import { signSliceStateType } from "../reducers/signSlilce"
import { CartSliceStateType } from "../reducers/cartSlice"
import { FaqSliceStateType } from "../reducers/faqSlice"
import { navSliceStateType } from "../reducers/navSlice"

export interface RootState {
    active: isActiveState
    search: searchState
    cardPicked: cardPickedState
    sign: signSliceStateType
    cart: CartSliceStateType
    faq: FaqSliceStateType
    nav: navSliceStateType
}
