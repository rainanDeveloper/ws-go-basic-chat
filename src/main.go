package main

import (
	"golearning/rjesus/ws-chat/src/handlers"
	"net/http"
)

func main() {
	http.Handle("/", http.FileServer(http.Dir("./public/")))
	http.HandleFunc("/ws", handlers.WsHandler)

	http.ListenAndServe(":8080", nil)
}