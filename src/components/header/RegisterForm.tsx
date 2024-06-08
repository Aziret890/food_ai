import styles from "../../css/Header.module.css"
import SignIn from "./regsterForms/SignIn"
import SignUp from "./regsterForms/SignUp"
import RestorePassword from "./regsterForms/RestorePassword"

const RegisterForm = () => {
    return (
        <div className={styles.register}>
            {/* SIGN IN FORM*/}
            <SignIn />
            {/* SIGN UP FORM*/}
            <SignUp />
            {/* RESTORE PASSWORD FORM*/}
            <RestorePassword />
        </div>
    )
}

export default RegisterForm
