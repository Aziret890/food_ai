import styles from "../../../css/Footer.module.css"
import faqData from "../../../data/faqData"
import Question from "./Question"

const Faq = () => {
    return (
        <div className={styles.faq}>
            <div className="container">
                <h2 className={styles.faq__title}>FAQ</h2>
                {faqData.map((data) => {
                    return (
                        <Question
                            question={data.question}
                            answer={data.answer}
                            id={data.id}
                            key={data.id}
                        />
                    )
                })}
            </div>
        </div>
    )
}

export default Faq
