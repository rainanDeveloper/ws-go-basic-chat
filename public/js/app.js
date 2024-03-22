import { loginBootstrap } from "./services/login/login.js"
import { userStorageBootstrap } from "./services/storage/user.js"

const appBootstrap = () => {
    loginBootstrap()
    userStorageBootstrap()
}

export {
    appBootstrap,
}