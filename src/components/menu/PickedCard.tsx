import { ICards } from "../types/types";
import styles from "../../css/Menu.module.css";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../typeOfStates/RootState";
import { setCartData } from "../../reducers/cartSlice";
import {
  incrementCount,
  decrementCount,
  setPick,
  resetCount,
} from "../../reducers/cardPcikedSlcie";
import { setQuantityCounter, setTotalPrice } from "../../reducers/cartSlice";

interface PickedCardProps extends ICards {}

const PickedCard = ({
  img,
  title,
  text,
  price,
  weight,
  id,
}: PickedCardProps) => {
  const dispatch = useDispatch();
  const count = useSelector((state: RootState) => state.cardPicked.count);
  const cartData = useSelector((state: RootState) => state.cart.cartData);

  console.log(cartData);
  return (
    <>
      <div
        onClick={() => {
          dispatch(setPick(false));
          dispatch(resetCount(1));
        }}
        className={styles.pickedCard__back}
      ></div>
      <div className={styles.pickedCard}>
        <div className={styles.pickedCard__row}>
          <div className={styles.pickedCard__img}>
            <img src={img} alt="" />
          </div>
          <div className={styles.pickedCard__description}>
            <h4 className={styles.pickedCard__title}>{title}</h4>
            <p className={styles.pickedCard__text}>{text}</p>
          </div>
        </div>
        <div className={styles.pickedCard__overLine}></div>
        <div className={styles.pickedCard__priceForWeight}>
          <h5 className={styles.pickedCard__weight}>Вес: {weight}</h5>
          <h5 className={styles.pickedCard__price}>{price}c</h5>
        </div>
        <div className={styles.pickedCard__underLine}></div>
        <div className={styles.pickedCard__howMany}>
          <button
            onClick={() => dispatch(decrementCount())}
            className={styles.pickedCard__minus}
          >
            -
          </button>
          <h5 className={styles.pickedCard__count}>{count}</h5>
          <button
            onClick={() => dispatch(incrementCount())}
            className={styles.pickedCard__plus}
          >
            +
          </button>
        </div>
        <div className={styles.pickedCard__addToCart}>
          <button
            onClick={() => {
              dispatch(
                setCartData([...cartData, { img, title, text, price, id }])
              );
              dispatch(setQuantityCounter({ id, count }));
              dispatch(setTotalPrice({ id, price }));
              dispatch(setPick(false));
              dispatch(resetCount(1));
            }}
          >
            add to cart
          </button>
        </div>
      </div>
    </>
  );
};

export default PickedCard;
