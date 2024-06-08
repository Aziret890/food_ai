import styles from "../../css/Intro.module.css"

function CallUs() {
    return (
        <div className={styles.call}>
            <div className={styles.call__row}>
                <h4 className={styles.call__numbers}>
                    Call us at the numbers:
                </h4>
                <a
                    href="tel:+997770566939"
                    className={styles.call__number}
                >
                    +996770566939
                </a>
                <a
                    href="tel:+997770566939"
                    className={styles.call__number}
                >
                    +996770566939
                </a>
            </div>
        </div>
    )
}

export default CallUs
