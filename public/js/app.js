import { loginBootstrap } from "./services/login/login.js"

const appBootstrap = () => {
    loginBootstrap()
}

export {
    appBootstrap,
}