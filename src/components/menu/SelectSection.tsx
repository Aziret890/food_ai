import { Element } from "react-scroll"
import styles from "../../css/Menu.module.css"

interface SelectProps {
    title: string
    children: React.ReactNode
}

function SelectSection({ title, children }: SelectProps) {
    return (
        <Element
            name={title.toLowerCase()}
            className={styles.selectSection}
        >
            <h2 className={styles.selectSection__title}>{title}</h2>
            <div className={styles.selectSection__underLine}></div>
            <div className={styles.selectSection__cards}>{children}</div>
        </Element>
    )
}

export default SelectSection
