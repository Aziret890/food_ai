import styles from "../../../css/Header.module.css"
import {
    setSignIn,
    setSignUp,
    setSignUpControlled,
} from "../../../reducers/signSlilce"
import { useSelector, useDispatch } from "react-redux"
import { RootState } from "../../../typeOfStates/RootState"

const SignUp = () => {
    const dispatch = useDispatch()
    const signUp = useSelector((state: RootState) => state.sign.signUp)
    const signUpControlled = useSelector(
        (state: RootState) => state.sign.signUpControlled
    )
    const handleSubmit = (e: any) => {
        e.preventDefault()
    }

    return (
        <>
            {signUp.signUpForm && (
                <form
                    onSubmit={(e) => {
                        handleSubmit(e)
                    }}
                    action=""
                    className={styles.signUp__form}
                >
                    {/* dataStage */}
                    {/* inputs */}
                    {signUp.dataStage && (
                        <div className={styles.signUp__allInputs}>
                            <div className={styles.signUp__nameInp}>
                                <label htmlFor="password">name</label>
                                <input
                                    onChange={(e) => {
                                        dispatch(
                                            setSignUpControlled({
                                                ...signUpControlled,
                                                name: e.target.value,
                                            })
                                        )
                                    }}
                                    id="password"
                                    type="text"
                                    className={styles.signUp__name}
                                />
                            </div>
                            <div className={styles.signUp__telephoneInp}>
                                <label htmlFor="number">Phone number</label>
                                <input
                                    onChange={(e) => {
                                        dispatch(
                                            setSignUpControlled({
                                                ...signUpControlled,
                                                telephone: e.target.value,
                                            })
                                        )
                                    }}
                                    id="number"
                                    type="text"
                                    className={styles.signUp__telephone}
                                />
                            </div>

                            <div className={styles.signUp__emailInp}>
                                <label htmlFor="password">email</label>
                                <input
                                    onChange={(e) => {
                                        dispatch(
                                            setSignUpControlled({
                                                ...signUpControlled,
                                                email: e.target.value,
                                            })
                                        )
                                    }}
                                    id="password"
                                    type="email"
                                    className={styles.signUp__email}
                                />
                            </div>
                        </div>
                    )}
                    {/* buttons */}
                    {signUp.dataStage && (
                        <div className={styles.signUp__btns}>
                            <button
                                onClick={() => {
                                    dispatch(
                                        setSignUp({
                                            ...signUp,
                                            signUpForm: false,
                                        })
                                    )
                                    dispatch(setSignIn(true))
                                }}
                                className={styles.signUp__cancel}
                            >
                                cancel
                            </button>
                            <button
                                onClick={() => {
                                    console.log("g")
                                    dispatch(
                                        setSignUp({
                                            ...signUp,
                                            dataStage: false,
                                            passwordStage: true,
                                        })
                                    )
                                }}
                                className={styles.signUp__continue}
                            >
                                continue
                            </button>
                        </div>
                    )}

                    {/* passwordStage */}
                    {/* inputs */}
                    {signUp.passwordStage && (
                        <div className={styles.signUp__createPassword}>
                            <div className={styles.signUp__firstPassword}>
                                <label htmlFor="email">Password</label>
                                <input
                                    onChange={(e) => {
                                        dispatch(
                                            setSignUpControlled({
                                                ...signUpControlled,
                                                createPass: e.target.value,
                                            })
                                        )
                                    }}
                                    id="email"
                                    type="text"
                                    className={styles.signUp__email}
                                />
                            </div>
                            <div className={styles.signUp__secondPassword}>
                                <label htmlFor="email">Repeat password</label>
                                <input
                                    onChange={(e) => {
                                        dispatch(
                                            setSignUpControlled({
                                                ...signUpControlled,
                                                repeatPass: e.target.value,
                                            })
                                        )
                                    }}
                                    id="email"
                                    type="text"
                                    className={styles.signUp__email}
                                />
                            </div>
                        </div>
                    )}
                    {/* buttons */}
                    {signUp.passwordStage && (
                        <div className={styles.signUp__btns}>
                            <button
                                onClick={() => {
                                    dispatch(
                                        setSignUp({
                                            ...signUp,
                                            dataStage: true,
                                            passwordStage: false,
                                        })
                                    )
                                }}
                                className={styles.signUp__cancel}
                            >
                                back
                            </button>
                            <button
                                onClick={() => {}}
                                className={styles.signUp__continue}
                            >
                                continue
                            </button>
                        </div>
                    )}
                </form>
            )}
        </>
    )
}

export default SignUp
