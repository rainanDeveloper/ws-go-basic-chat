const WS_URL = "ws://localhost:8080/ws"

const openWSConnection = () => {
    window.ws = new WebSocket(WS_URL)
    window.ws.onmessage = (onWSMessageReceiving)
}

const onWSMessageReceiving = (event) => {
    const data = JSON.parse(event.data)
    
    if(data.event_name) {
        handleEvent(data)
        return
    }
    
    handleMessage(data)
}

const handleEvent = (event) => {
    const chatMessagesContainer = document.querySelector("#chat-messages");
    const divNewEvent = document.createElement('div')
    divNewEvent.classList.add("chat-event")
    const paragraphNewEvent = document.createElement('p')
    paragraphNewEvent.innerText = event.message
    divNewEvent.appendChild(paragraphNewEvent)
    chatMessagesContainer.appendChild(divNewEvent)
}

const handleMessage = (message) => {
    const chatMessagesContainer = document.querySelector("#chat-messages");
    const divMessage = document.createElement('div')
    divMessage.classList.add('chat-message')
    const authorSpan = document.createElement('span')
    authorSpan.innerText = message.sender_name
    const paragraphMessage = document.createElement('p')
    paragraphMessage.appendChild(authorSpan)
    paragraphMessage.innerHTML += message.message
    divMessage.appendChild(paragraphMessage)
    chatMessagesContainer.appendChild(divMessage)
}

const closeWSConnection = () => {
    window.ws.close()
}

const sendData = (data) => {
    window.ws.send(data)
}

export {
    sendData,
    openWSConnection,
    closeWSConnection,
}