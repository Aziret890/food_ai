import { useSelector, useDispatch } from "react-redux"
import { RootState } from "../../../typeOfStates/RootState"
import styles from "../../../css/Header.module.css"
import {
    setSignIn,
    setSignUp,
    setSignInControlled,
    setRestore,
} from "../../../reducers/signSlilce"

const SignIn = () => {
    const dispatch = useDispatch()
    const signUp = useSelector((state: RootState) => state.sign.signUp)
    const signIn = useSelector((state: RootState) => state.sign.signIn)
    const signInControlled = useSelector(
        (state: RootState) => state.sign.signInControlled
    )
    const handleSubmit = (e: any) => {
        e.preventDefault()
    }

    return (
        <>
            {signIn && (
                <form
                    onSubmit={(e) => {
                        handleSubmit(e)
                    }}
                    className={styles.signIn__form}
                >
                    {/* input number */}
                    <div className={styles.signIn__telephoneInp}>
                        <label htmlFor="number">Phone number</label>
                        <input
                            onChange={(e) => {
                                dispatch(
                                    setSignInControlled({
                                        ...signInControlled,
                                        telephone: e.target.value,
                                    })
                                )
                            }}
                            id="number"
                            type="text"
                            className={styles.signIn__telephone}
                        />
                    </div>
                    {/* input password */}
                    <div className={styles.signIn__passwordInp}>
                        <label htmlFor="password">password</label>
                        <input
                            onChange={(e) => {
                                dispatch(
                                    setSignInControlled({
                                        ...signInControlled,
                                        password: e.target.value,
                                    })
                                )
                            }}
                            id="password"
                            type="password"
                            className={styles.signIn__password}
                        />
                        <button
                            onClick={() => {
                                dispatch(setSignIn(false))
                                dispatch(setRestore(true))
                            }}
                            className={styles.signIn__restorePassword}
                        >
                            restore password
                        </button>
                    </div>

                    <div className={styles.signIn__btns}>
                        <button
                            onClick={() => {
                                dispatch(
                                    setSignUp({ ...signUp, signUpForm: true })
                                )
                                dispatch(setSignIn(false))
                            }}
                            className={styles.signIn__signUp}
                        >
                            sign up
                        </button>
                        <button className={styles.signIn__signIn}>
                            sign in
                        </button>
                    </div>
                </form>
            )}
        </>
    )
}

export default SignIn
