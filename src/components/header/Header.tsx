import styles from "../../css/Header.module.css";
import { Link } from "react-router-dom";
import Nav from "./Nav";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../typeOfStates/RootState";
import { setShow } from "../../reducers/navSlice";
import { setForm } from "../../reducers/signSlilce";

const Header = () => {
  const dispatch = useDispatch();
  const form = useSelector((state: RootState) => state.sign.form);
  const show = useSelector((state: RootState) => state.nav.show);

  return (
    <div
      style={{ overflow: `${show || form ? "visible" : "hidden"}` }}
      className={styles.header}
    >
      <div className="container">
        <div className={styles.header__row}>
          <div className={styles.header__logo}>
            <Link to="/">BaykoFood</Link>
          </div>
          <div
            onClick={() => {
              show ? dispatch(setShow(false)) : dispatch(setShow(true));
              dispatch(setForm(false));
            }}
            className={`${styles.header__showNav} ${
              show ? styles.header__closeNav : ""
            }`}
          >
            <span className={styles.header__navBtn}></span>
          </div>
          <Nav />
        </div>
      </div>
    </div>
  );
};

export default Header;
