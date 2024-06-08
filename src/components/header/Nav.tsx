import styles from "../../css/Header.module.css";
import { Link } from "react-router-dom";
import { setForm } from "../../reducers/signSlilce";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../typeOfStates/RootState";
import RegisterForm from "./RegisterForm";
import { setCart } from "../../reducers/cartSlice";
import { useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import { setShow } from "../../reducers/navSlice";

const Nav = () => {
  const dispatch = useDispatch();
  const form = useSelector((state: RootState) => state.sign.form);
  const cart = useSelector((state: RootState) => state.cart.cart);
  const show = useSelector((state: RootState) => state.nav.show);

  useEffect(() => {
    if (cart || show) {
      document.body.style.overflow = "hidden";
    }

    if (!cart && !show) {
      document.body.style.overflow = "";
    }
  }, [cart, show]);

  return (
    <>
      <nav
        className={`${styles.header__nav} ${show ? styles.header__bgNav : ""}`}
      >
        <ul className={styles.header__menu}>
          <li style={{ cursor: "pointer" }} className={styles.header__list}>
            <ScrollLink
              to="section1"
              smooth={true}
              duration={500}
              offset={-100}
              onClick={() => {
                dispatch(setShow(false));
              }}
            >
              Menu
            </ScrollLink>
          </li>
          <li className={styles.header__list}>
            <Link
              onClick={() => {
                dispatch(setShow(false));
              }}
              to="/contacts"
            >
              Contacts
            </Link>
          </li>
          <li className={`${styles.header__list} ${styles.header__list_sign}`}>
            <button
              className={styles.header__sign_button}
              onClick={() => {
                form ? dispatch(setForm(false)) : dispatch(setForm(true));
              }}
            >
              Sign in
            </button>
            {form && <RegisterForm />}
          </li>
          <li className={`${styles.header__list} ${styles.header__list_cart}`}>
            <button
              onClick={() => {
                cart ? dispatch(setCart(false)) : dispatch(setCart(true));
                dispatch(setShow(false));
              }}
              className={styles.header__cart_button}
            >
              Cart
            </button>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Nav;
