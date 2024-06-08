import styles from "../../css/Order.module.css"
import { useDispatch, useSelector } from "react-redux"
import foodsData from "../../data/foodsData"
import { RootState } from "../../typeOfStates/RootState"
import Header from "../header/Header"

const Order = () => {
    const dispatch = useDispatch()
    const totalPrice = useSelector((state: RootState) => state.cart.totalPrice)
    const uniqueEl = useSelector((state: RootState) => state.cart.uniqueEl)
    const counter = useSelector((state: RootState) => state.cart.counter)

    return (
        <div className={styles.order}>
            <div className={styles.order__row}>
                {/* SECTION CART */}
                <h3 className={styles.order__cartTitle}>Cart</h3>
                <div className={styles.order__cart}>
                    {uniqueEl.map((data) => {
                        return (
                            <div
                                className={`${styles.order__item} ${styles.item}`}
                            >
                                <h5 className={styles.item__title}>
                                    {`${data.title}(${counter[data.id || 0]})`}
                                    <span className={styles.item__count}></span>
                                </h5>
                                <h5 className={styles.item__price}>
                                    {data.price * counter[data.id || 0]}c
                                </h5>
                            </div>
                        )
                    })}
                    <div className={styles.order__line}></div>
                    <h4
                        className={styles.order__totalPrice}
                    >{`Total: ${totalPrice.reduce(
                        (acc, el) => acc + el,
                        0
                    )}c`}</h4>
                </div>

                {/* SECTION ADRESS */}
                <h3 className={styles.order__placeTitle}>Place an order</h3>
                <div className={styles.order__place}>
                    <form
                        action=""
                        className={styles.order__form}
                    >
                        <h4 className={styles.order__infoTitle}>
                            Contact information
                        </h4>
                        <div className={styles.order__info}>
                            <input
                                type="text"
                                placeholder="name"
                                className={styles.order__name}
                            />
                            <input
                                type="text"
                                placeholder="telephone"
                                className={styles.order__telephone}
                            />
                            <input
                                className={styles.order__email}
                                type="email"
                                placeholder="email"
                            />
                        </div>
                        <h4 className={styles.order__adressAndPlaceTitle}>
                            Select adress
                        </h4>
                        <div className={styles.order__adressAnPlace}>
                            <input
                                className={styles.order__adress}
                                type="text"
                                placeholder="adress"
                            />
                            <input
                                className={styles.order__flat}
                                type="text"
                                placeholder="flat"
                            />
                            <input
                                className={styles.order__floor}
                                type="text"
                                placeholder="floor"
                            />
                        </div>
                        <h4 className={styles.order__methodPaymentTitle}>
                            Method of payment
                        </h4>
                        <div className={styles.order__methodPayment}>
                            <select
                                className={styles.order__payment}
                                name=""
                                id=""
                            >
                                <option value="">card</option>
                                <option value="">cash</option>
                            </select>
                        </div>
                        <div className={styles.order__btn}>
                            <button>order</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Order
