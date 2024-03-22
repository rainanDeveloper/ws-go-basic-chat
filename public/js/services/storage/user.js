const checkUserOnLocalStorage = () => {
    const user = localStorage.getItem('user');

    if(!user) {
        return false
    }

    return true
}

const setUser = (user) => {
    localStorage.setItem('user', user)
}

export {
    checkUserOnLocalStorage,
    setUser,
}