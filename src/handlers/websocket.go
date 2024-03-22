package handlers

import (
	"context"
	"log"
	"net/http"

	"nhooyr.io/websocket"
)

var clients map[*websocket.Conn] bool = make(map[*websocket.Conn]bool)

func WsHandler(writer http.ResponseWriter, request *http.Request) {
	ws, err := websocket.Accept(writer, request,  &websocket.AcceptOptions{
		InsecureSkipVerify: true,
	})

	if(err != nil) {
		log.Fatal(err)
	}

	clients[ws] = true
	broadcastClientConnected(request.Context())

	for {
		_, data, err := ws.Read(request.Context())

		if(err != nil) {
			log.Println("Encerrando conexão do cliente")
			delete(clients, ws)
			break
		}

		message, err := NewMessageFromJSON(string(data))

		if(err != nil) {
			log.Printf("Error during json unmarshaling of client message")
		}

		broadcastData(request.Context(), message.ToJSON())
	}

}

func broadcastClientConnected(ctx context.Context) {
	var clientConnectedEvent Event = Event{
		EventName: "CLIENT_CONNECTED",
		Message: "New client connected",
	}
	broadcastData(ctx, clientConnectedEvent.ToJSON())
}

func broadcastData(ctx context.Context, data string) {
	for client := range clients {
		client.Write(ctx, websocket.MessageText, []byte(data))
	}
}