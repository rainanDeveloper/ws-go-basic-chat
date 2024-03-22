const checkUserOnLocalStorage = () => {
    const user = localStorage.getItem('user');

    if(!user) {
        return false
    }

    return true
}

const setUser = (user) => {
    localStorage.setItem('user', user)
    fillLabel()
}

const getUser = () => {
    return localStorage.getItem('user')
}

const clearUser = () => {
    localStorage.removeItem('user')
    clearLabel()
}

const userStorageBootstrap = () => {
    if(checkUserOnLocalStorage()) {
        fillLabel()
    }
}

const fillLabel = () => {
    const chatUserNameLabel = document.querySelector("#chat-user-name-label")

    chatUserNameLabel.innerText = getUser()
}

const clearLabel = () => {
    const chatUserNameLabel = document.querySelector("#chat-user-name-label")

    chatUserNameLabel.innerText = ""
}

export {
    checkUserOnLocalStorage,
    setUser,
    clearUser,
    userStorageBootstrap,
}