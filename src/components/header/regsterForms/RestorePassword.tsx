import { useSelector, useDispatch } from "react-redux"
import { RootState } from "../../../typeOfStates/RootState"
import styles from "../../../css/Header.module.css"
import {
    setSignIn,
    setRestorePassControlled,
    setSelectRestore,
    setRestore,
} from "../../../reducers/signSlilce"

const RestorePassword = () => {
    const dispatch = useDispatch()
    const restorePassControlled = useSelector(
        (state: RootState) => state.sign.restorePassControlled
    )

    const selectOption = useSelector(
        (state: RootState) => state.sign.selectRestore
    )
    const restore = useSelector((state: RootState) => state.sign.restore)

    const handleOption = (e: any) => {
        console.log(e.target.value)
        dispatch(setSelectRestore(e.target.value))
    }

    return (
        <>
            {restore && (
                <form
                    action=""
                    className={styles.restore__form}
                >
                    <div className={styles.restore__redioRow}>
                        <div className={styles.restore__radio}>
                            <input
                                value="telephone"
                                type="radio"
                                id="telephone"
                                checked={selectOption === "telephone"}
                                onChange={(e) => {
                                    handleOption(e)
                                }}
                            />
                            <label htmlFor="telephone">telephone</label>
                        </div>
                        <div className={styles.restore__radio}>
                            <input
                                value="email"
                                type="radio"
                                id="email"
                                checked={selectOption === "email"}
                                onChange={(e) => {
                                    handleOption(e)
                                }}
                            />
                            <label htmlFor="email">Email</label>
                        </div>
                    </div>

                    <div className={styles.restore__restoreInps}>
                        {selectOption === "telephone" && (
                            <div className={styles.restore__telephoneInp}>
                                <label htmlFor="number">Phone number</label>
                                <input
                                    onChange={(e) => {
                                        dispatch(
                                            setRestorePassControlled({
                                                ...restorePassControlled,
                                                telephone: e.target.value,
                                            })
                                        )
                                    }}
                                    id="number"
                                    type="text"
                                    className={styles.restore__telephone}
                                />
                            </div>
                        )}
                        {selectOption === "email" && (
                            <div className={styles.restore__emailInp}>
                                <label htmlFor="email">email</label>
                                <input
                                    onChange={(e) => {
                                        dispatch(
                                            setRestorePassControlled({
                                                ...restorePassControlled,
                                                email: e.target.value,
                                            })
                                        )
                                    }}
                                    id="email"
                                    type="text"
                                    className={styles.restore__email}
                                />
                            </div>
                        )}
                    </div>
                    <div className={styles.restore__btns}>
                        <button
                            onClick={() => {
                                dispatch(setRestore(false))
                                dispatch(setSignIn(true))
                            }}
                            className={styles.restore__cancel}
                        >
                            cancel
                        </button>
                        <button className={styles.restore__continue}>
                            continue
                        </button>
                    </div>
                </form>
            )}
        </>
    )
}

export default RestorePassword
