import { Link, Element } from "react-scroll"
import styles from "../../css/Intro.module.css"

function KindOfFood() {
    return (
        <Element
            name="section1"
            className={styles.foodSelection}
        >
            <div className={styles.foodSelection__row}>
                <Link
                    to={`food`.toLowerCase()}
                    smooth={true}
                    duration={500}
                    offset={-100}
                >
                    <div className={styles.foodSelection__item}>
                        <div className={styles.foodSelection__svg}>
                            <img
                                src="/images/svg/local_pizza.svg"
                                alt=""
                            />
                        </div>
                        <h3 className={styles.foodSelection__title}>food</h3>
                    </div>
                </Link>

                <Link
                    to={`dessert`.toLowerCase()}
                    smooth={true}
                    duration={500}
                    offset={-100}
                >
                    <div className={styles.foodSelection__item}>
                        <div className={styles.foodSelection__svg}>
                            <img
                                src="/images/svg/bakery_dining.svg"
                                alt=""
                            />
                        </div>
                        <h3 className={styles.foodSelection__title}>dessert</h3>
                    </div>
                </Link>
                <Link
                    to={`drinks`.toLowerCase()}
                    smooth={true}
                    duration={500}
                    offset={-100}
                >
                    <div className={styles.foodSelection__item}>
                        <div className={styles.foodSelection__svg}>
                            <img
                                src="/images/svg/emoji_food_beverage.svg"
                                alt=""
                            />
                        </div>
                        <h3 className={styles.foodSelection__title}>drinks</h3>
                    </div>
                </Link>
                <Link
                    to={`combo`.toLowerCase()}
                    smooth={true}
                    duration={500}
                    offset={-100}
                >
                    <div className={styles.foodSelection__item}>
                        <div className={styles.foodSelection__svg}>
                            <img
                                src="/images/svg/local_dining.svg"
                                alt=""
                            />
                        </div>
                        <h3 className={styles.foodSelection__title}>combo</h3>
                    </div>
                </Link>
            </div>
        </Element>
    )
}

export default KindOfFood
