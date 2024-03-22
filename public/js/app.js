import { loginBootstrap } from "./services/login/login.js"
import { messageBootstrap } from "./services/message/message.js"
import { userStorageBootstrap } from "./services/storage/user.js"

const appBootstrap = () => {
    loginBootstrap()
    userStorageBootstrap()
    messageBootstrap()
}

export {
    appBootstrap,
}