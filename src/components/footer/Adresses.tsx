import styles from "../../css/Footer.module.css"

const Adresses = () => {
    return (
        <div className={styles.adresses}>
            <div className="container">
                <h2 className={styles.adresses__title}>Adresses</h2>
                <div className={styles.adresses__list}>
                    <ul>
                        <li className={styles.adresses__link}>
                            <a
                                target="_blank"
                                href="https://2gis.kg/bishkek/firm/70000001035919302?m=74.619948%2C42.87944%2F16"
                            >
                                ​Проспект Шабдан Баатыра, 4а, Бишкек​135
                                филиалов
                            </a>
                        </li>
                        <li className={styles.adresses__link}>
                            <a
                                target="_blank"
                                href="https://2gis.kg/bishkek/search/%D0%AD%D0%BD%D0%B8%D0%B3%D0%BC%D0%B0?m=74.61314%2C42.876954%2F14.73"
                            >
                                ​Проспект Чуй, 115, Бишкек​40 филиалов
                            </a>
                        </li>
                    </ul>
                </div>
                {/* <div className={styles.adresses__map}>
                    <img
                        src="/images/content/map.png"
                        alt=""
                    />
                </div> */}
            </div>
        </div>
    )
}

export default Adresses
