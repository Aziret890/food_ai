import styles from "../../../css/Cart.module.css"
import Product from "./Product"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../../../typeOfStates/RootState"
import {
    setCartDelivery,
    setCart,
    setCartData,
    setUnqueEl,
} from "../../../reducers/cartSlice"
import { setShow } from "../../../reducers/navSlice"
import { Link } from "react-router-dom"
import { useEffect } from "react"

const Cart = () => {
    const dispatch = useDispatch()
    const cartData = useSelector((state: RootState) => state.cart.cartData)
    const cartDelivery = useSelector(
        (state: RootState) => state.cart.cartDelivery
    )
    const counter = useSelector((state: RootState) => state.cart.counter)
    const totalPrice = useSelector((state: RootState) => state.cart.totalPrice)
    const uniqueEl = useSelector((state: RootState) => state.cart.uniqueEl)

    // ------------------Уникальный объекты из массива паттерн пойми как работает -----------------------
    let tmpArray: any = []

    function itemCheck(item: any) {
        if (tmpArray.indexOf(item.id) === -1) {
            tmpArray.push(item.id)
            return true
        }
        return false
    }

    const unique = cartData.filter((item) => itemCheck(item))

    useEffect(() => {
        dispatch(setUnqueEl(unique))
    }, [cartData])

    const allQuantityProducts = counter.reduce((acc, data) => acc + data, 0)
    // ----------------------------------------------------------------------------------------------------

    return (
        <>
            <div
                onClick={() => {
                    dispatch(setCart(false))
                }}
                className={styles.cart__back}
            ></div>

            <div className={styles.cart}>
                <button
                    className={styles.cart__hideCart}
                    onClick={() => {
                        dispatch(setCart(false))
                    }}
                >
                    X
                </button>
                <div className={styles.cart__row}>
                    <div className={styles.cart__top}>
                        <h2 className={styles.cart__produtsCounter}>
                            {`${allQuantityProducts} products: ${totalPrice.reduce(
                                (acc, el) => acc + el,
                                0
                            )}c`}
                        </h2>
                        <div className={styles.cart__products}>
                            {uniqueEl.map((data, ind) => (
                                <Product
                                    img={data.img}
                                    title={data.title}
                                    text={data.text}
                                    price={data.price}
                                    // key={data.id}
                                    key={ind}
                                    id={data.id}
                                    // deleteData={deleteData}
                                />
                            ))}
                        </div>
                    </div>

                    <div className={styles.cart__bottom}>
                        <div className={styles.cart__placeAnOrder}>
                            <div className={styles.cart__total}>
                                <div className={styles.cart__btns}>
                                    <button
                                        onClick={() => {
                                            dispatch(setCartDelivery(true))
                                        }}
                                        className={styles.cart__delivery}
                                        style={{
                                            backgroundColor: `${
                                                cartDelivery ? "#ff7d2e" : ""
                                            }`,
                                            color: `${
                                                cartDelivery ? "#fff" : ""
                                            }`,
                                        }}
                                    >
                                        delivery
                                    </button>
                                    <button
                                        onClick={() => {
                                            dispatch(setCartDelivery(false))
                                        }}
                                        className={styles.cart__selfCall}
                                        style={{
                                            backgroundColor: `${
                                                cartDelivery ? "" : "#ff7d2e"
                                            }`,
                                            color: `${
                                                cartDelivery ? "" : "#fff"
                                            }`,
                                        }}
                                    >
                                        self-call
                                    </button>
                                </div>
                                <h4 className={styles.cart__totalPrice}>
                                    {`total: ${totalPrice.reduce(
                                        (acc, el) => acc + el,
                                        cartDelivery ? 300 : 0
                                    )}c`}
                                </h4>
                            </div>
                            <div className={styles.cart__line}></div>
                            <Link
                                to={"/order"}
                                className={styles.cart__order}
                                onClick={() => {
                                    dispatch(setShow(false))
                                    dispatch(setCart(false))
                                }}
                            >
                                place an order
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cart
