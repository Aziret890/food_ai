import styles from "../../../css/Cart.module.css"
import foodsData from "../../../data/drinksData"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../../../typeOfStates/RootState"
import { useEffect } from "react"
import { ICards } from "../../types/types"
import {
    setCartData,
    setCounter,
    setCounterMinus,
    setCounterPlus,
    setTotalPrice,
} from "../../../reducers/cartSlice"

interface CartProps extends ICards {}

const Product = ({ img, title, text, price, id = 0 }: CartProps) => {
    const dispatch = useDispatch()
    const total = useSelector((state: RootState) => state.cart.totalPrice)
    const counter = useSelector(
        (state: RootState) => state.cart.counter[id] || 0
    )

    // console.log(total)
    // console.log(cartData)
    // console.log(counter)
    // console.log(id)

    return (
        <div className={styles.product}>
            <div className={styles.product__back}></div>
            <div className={styles.product__info}>
                <div className={styles.product__logo}>
                    <img
                        src={img}
                        alt=""
                    />
                </div>
                <div className={styles.product__description}>
                    <h4 className={styles.product__title}>{title}</h4>
                    <p className={styles.product__text}>{text}</p>
                </div>
            </div>
            <div className={styles.product__line}></div>
            <div className={styles.product__priceHowQuantity}>
                <div className={styles.product__howMany}>
                    <button
                        onClick={() => {
                            dispatch(setCounterMinus({ id }))
                            dispatch(setTotalPrice({ id, price }))
                        }}
                        className={styles.product__minus}
                    >
                        -
                    </button>
                    <h5 className={styles.product__count}>{counter}</h5>
                    <button
                        onClick={() => {
                            dispatch(setCounterPlus({ id }))
                            dispatch(setTotalPrice({ id, price }))
                        }}
                        className={styles.product__plus}
                    >
                        +
                    </button>
                </div>
                <h4 className={styles.product__price}>{price * counter}c</h4>
            </div>
        </div>
    )
}

export default Product
