import styles from "../../css/Footer.module.css"
import CallUs from "../intro/CallUs"

const Contacts = () => {
    return (
        <div className={styles.contacts}>
            <div className="container">
                <h2 className={styles.contacts__title}>Contacts</h2>
                <p className={styles.contacts__subtitle}>
                    Вам ответит наш соотрудник, связывайтесь, не бойтесь не
                    укусит. Звони я сказал! Быстро!
                </p>
                <div className={styles.contacts__contacts}>
                    <CallUs />
                </div>
            </div>
        </div>
    )
}

export default Contacts
