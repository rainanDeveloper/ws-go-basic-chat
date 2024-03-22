package main

import (
	"context"
	"golearning/rjesus/ws-chat/src/handlers"
	"log"
	"net/http"

	"golang.ngrok.com/ngrok"
	"golang.ngrok.com/ngrok/config"
)

func main() {
	if err := run(context.Background()); err != nil {
		log.Fatal(err)
	}
}

func run(ctx context.Context) error {
	listener, err := ngrok.Listen(ctx, config.HTTPEndpoint(), ngrok.WithAuthtokenFromEnv())
	if err!= nil {
		return err
	}

	log.Println("Ingress established at: ", listener.URL())


	http.Serve(listener, http.HandlerFunc(handler))

	return nil
}

func handler(writer http.ResponseWriter, request *http.Request) {
	log.Printf("%v %v\n", request.Method, request.URL.Path)
	if request.Method == http.MethodGet && request.URL.Path == "/ws" {
		handlers.WsHandler(writer, request)
	}
	http.FileServer(http.Dir("./public")).ServeHTTP(writer, request)

}