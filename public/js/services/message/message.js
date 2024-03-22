import { checkUserOnLocalStorage, getUser } from "../storage/user.js"
import { sendData } from "../websocket/websocket.js"

const sendMessage = (message) => {
    if(!checkUserOnLocalStorage()) {
        return
    }

    const messageData = {
        sender_name: getUser(),
        message
    }
    sendData(JSON.stringify(messageData))
}

const messageBootstrap = () => {
    const messageForm = document.querySelector("#message-form")
    const messageInput = document.querySelector("#message-textarea-input")

    messageForm.addEventListener("submit", handleSend)
    messageInput.addEventListener("keydown", (event) => {
        if(event.key == "Enter") {
            handleSend(event)
        }
    })
}

const handleSend = (event) => {
    const messageInput = document.querySelector("#message-textarea-input")
    event.preventDefault()
    sendMessage(messageInput.value)
    messageInput.value = ""
}

export {
    sendMessage,
    messageBootstrap,
}