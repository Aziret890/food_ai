import styles from "../../../css/Footer.module.css"
import { setOpenFaq } from "../../../reducers/faqSlice"
import { RootState } from "../../../typeOfStates/RootState"
import { IFaq } from "../../types/types"
import { useDispatch, useSelector } from "react-redux"

interface QuestionProps extends IFaq {}

const Question = ({ question, answer, id }: QuestionProps) => {
    const dispatch = useDispatch()
    const openFaq = useSelector((state: RootState) => state.faq.openFaq)

    return (
        <div className={styles.question}>
            <div className={styles.question__row}>
                <h2 className={styles.question__question}>{question}</h2>
                <button
                    onClick={() => {
                        dispatch(setOpenFaq({ id }))
                    }}
                    className={styles.question__btn}
                    style={{
                        transform: `${openFaq[id || 0] ? "rotate(45deg)" : ""}`,
                        background: `${openFaq[id || 0] ? "#3b3b3d" : ""}`,
                    }}
                >
                    +
                </button>
            </div>
            {openFaq[id || 0] && (
                <p className={styles.question__answer}>{answer}</p>
            )}
        </div>
    )
}

export default Question
