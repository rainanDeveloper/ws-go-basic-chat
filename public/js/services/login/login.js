import { checkUserOnLocalStorage, setUser } from "../storage/user.js"

const checkIfLoginIsNeededAndLoadLogin = () => {
    if(checkUserOnLocalStorage()) {
        hideLoginForm()
        return;
    }

    showLoginForm()
}

const showLoginForm = () => {
    const loginContainer = document.querySelector("#login-container")
    loginContainer.style.display = "flex"
}

const hideLoginForm = () => {
    const loginContainer = document.querySelector("#login-container")
    loginContainer.style.display = "none"
}

const loginUser = (user) => {
    setUser(user)
    hideLoginForm()
}

const setupLoginForm = () => {
    const loginForm = document.querySelector("#login-form")

    loginForm.addEventListener("submit", () => {
        const loginInput = document.querySelector("#login-input")

        loginUser(loginInput.value)
    })
}

const loginBootstrap = () => {
    checkIfLoginIsNeededAndLoadLogin();
    setupLoginForm();
}

export {
    loginBootstrap,
    checkIfLoginIsNeededAndLoadLogin,
}