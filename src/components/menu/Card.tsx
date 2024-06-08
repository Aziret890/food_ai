import styles from "../../css/Menu.module.css";
import { ICards } from "../types/types";
import { setPick, whichId } from "../../reducers/cardPcikedSlcie";
import { setCartData, setTotalPrice } from "../../reducers/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../typeOfStates/RootState";
import { useEffect } from "react";
import PickedCard from "./PickedCard";
import { setCounter } from "../../reducers/cartSlice";

interface CardProps extends ICards {}

const Card = ({ img, title, text, price, weight, id }: CardProps) => {
  const dispatch = useDispatch();
  const pick = useSelector((state: RootState) => state.cardPicked.pick);
  const which = useSelector((state: RootState) => state.cardPicked.which);
  const cartData = useSelector((state: RootState) => state.cart.cartData);
  const counter = useSelector((state: RootState) => state.cart.counter);

  useEffect(() => {
    pick
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "");
  }, [pick]);

  return (
    <>
      <div className={styles.card}>
        <div
          onClick={() => {
            dispatch(whichId(id));
            dispatch(setPick(true));
          }}
          className={styles.card__clickable}
        >
          <div className={styles.card__img}>
            <img src={img} alt="" />
          </div>
          <h3 className={styles.card__title}>{title}</h3>
          <p className={styles.card__text}>{text}</p>
          <div className={styles.card__line}></div>
        </div>
        <div className={styles.card__row}>
          <h5 className={styles.card__price}>{price}c</h5>
          <button
            onClick={() => {
              dispatch(
                setCartData([
                  ...cartData,
                  {
                    img,
                    title,
                    text,
                    price,
                    id,
                  },
                ])
              );
              dispatch(setCounter({ id }));
              dispatch(setTotalPrice({ id, price }));
            }}
            className={styles.card__cart}
          >
            add to cart
          </button>
        </div>
      </div>
      {which === id && pick && (
        <PickedCard
          img={img}
          title={title}
          price={price}
          text={text}
          weight={weight}
          id={id}
        />
      )}
    </>
  );
};

export default Card;
