const WS_URL = "ws://localhost:8080/ws"

const openWSConnection = () => {
    window.ws = new WebSocket(WS_URL)
    window.ws.onmessage = ((event) => {
        const data = JSON.parse(event.data)

        if(data.event_name) {
            console.log(`${data.message}`)
        }
    })
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