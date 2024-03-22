import { checkUserOnLocalStorage, clearUser, setUser } from "../storage/user.js"
import { closeWSConnection, openWSConnection } from "../websocket/websocket.js";

const checkIfLoginIsNeededAndLoadLogin = () => {
    if(checkUserOnLocalStorage()) {
        hideLoginForm()
        openWSConnection()
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
    openWSConnection()
}

const logout = () => {
    clearUser()
    showLoginForm()
    closeWSConnection()
}

const setupLoginForm = () => {
    const loginForm = document.querySelector("#login-form")

    loginForm.addEventListener("submit", (event) => {
        event.preventDefault()
        const loginInput = document.querySelector("#login-input")

        loginUser(loginInput.value)
        loginInput.value = ""
    })
}

const setupLogoutButton = () => {
    const logoutButton = document.querySelector("#logout-button")

    logoutButton.addEventListener("click", (event) => {
        event.preventDefault()
        logout()
    })
}

const loginBootstrap = () => {
    checkIfLoginIsNeededAndLoadLogin()
    setupLoginForm()
    setupLogoutButton()
}

export {
    loginBootstrap,
    checkIfLoginIsNeededAndLoadLogin,
}