import styles from "../../css/Intro.module.css"
import { ICards } from "../types/types"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../../typeOfStates/RootState"
import PickedCard from "../menu/PickedCard"
import { whichId, setPick } from "../../reducers/cardPcikedSlcie"
import { changeInput } from "../../reducers/serachSlice"

interface FoundProps extends ICards {
    children: React.ReactNode
}

const Found = ({ img, price, title, id, weight, text }: FoundProps) => {
    const dispatch = useDispatch()
    const clearSearch = () => {
        dispatch(changeInput(""))
    }
    return (
        <>
            <div
                className={styles.found}
                onClick={() => {
                    dispatch(whichId(id))
                    dispatch(setPick(true))
                    clearSearch()
                }}
            >
                <div className={styles.found__row}>
                    <div className={styles.found__foodName}>
                        <div className={styles.found__img}>
                            <img
                                src={img}
                                alt=""
                            />
                        </div>
                        <h3 className={styles.found__title}>{title}</h3>
                    </div>

                    <h4 className={styles.found__price}>{price}c</h4>
                </div>
            </div>
            {/* {which === id && pick && (
                <PickedCard
                    img={img}
                    title={title}
                    price={price}
                    text={text}
                    weight={weight}
                />
            )} */}
        </>
    )
}

export default Found
