import styles from "../../css/MoreInfo.module.css"
import FindUs from "./FindUs"

function MoreInfo() {
    return (
        <div className={styles.moreInfo}>
            <div className="container">
                <div className={styles.moreInfo__row}>
                    <div className={styles.moreInfo__delivery}>
                        <h2 className={styles.moreInfo__delivery_title}>
                            We deliver all over the city.
                        </h2>
                        <p className={styles.moreInfo__delivery_subtitle}>
                            Если мы не успеем доставить любые продукты, кроме
                            сувенирной продукции и соусов, в течение 60 минут,
                            курьер подарит вам сертификат на большую пиццу.
                        </p>
                    </div>
                    <FindUs />
                </div>
            </div>
        </div>
    )
}

export default MoreInfo
