import { createSlice } from "@reduxjs/toolkit"

// object states

interface ISignUp {
    signUpForm: boolean
    dataStage: boolean
    passwordStage: boolean
}

interface IControlledForms {
    name: string
    email: string
    telephone: string
    password: string
    createPass: string
    repeatPass: string
}

// all state

export interface signSliceStateType {
    signIn: boolean
    signUp: ISignUp
    form: boolean
    restore: boolean
    selectRestore: string
    signInControlled: IControlledForms
    signUpControlled: IControlledForms
    restorePassControlled: IControlledForms
}

const signSlice = createSlice({
    name: "sign",
    initialState: {
        form: false,
        signIn: true,
        signUp: {
            signUpForm: false,
            dataStage: true,
            passwordStage: false,
        },
        restore: false,
        selectRestore: "telephone",
        signInControlled: {
            telephone: "",
            password: "",
        },
        signUpControlled: {
            name: "",
            email: "",
            telephone: "",
            createPass: "",
            repeatPass: "",
        },
        restorePassControlled: {
            email: "",
            telephone: "",
        },
    },
    reducers: {
        setForm: (state, action) => {
            // if (state.form === false) {
            //     state.form = true
            // } else {
            //     state.form = false
            // }
            state.form = action.payload
        },
        setSignIn: (state, action) => {
            state.signIn = action.payload
        },
        setSignUp: (state, action) => {
            state.signUp = action.payload
        },
        setRestore: (state, action) => {
            state.restore = action.payload
        },
        setSelectRestore: (state, action) => {
            state.selectRestore = action.payload
        },
        setSignInControlled: (state, action) => {
            state.signInControlled = action.payload
        },
        setSignUpControlled: (state, action) => {
            state.signUpControlled = action.payload
        },
        setRestorePassControlled: (state, action) => {
            state.restorePassControlled = action.payload
        },
    },
})

export const {
    setSignIn,
    setSignUp,
    setForm,
    setRestore,
    setSelectRestore,
    setSignInControlled,
    setSignUpControlled,
    setRestorePassControlled,
} = signSlice.actions
export default signSlice.reducer
