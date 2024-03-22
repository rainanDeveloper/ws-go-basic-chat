package handlers

import (
	"encoding/json"
	"log"
)

type Message struct {
	SenderName string `json:"sender_name"`
	Message    string `json:"message"`
}

func (message Message) ToJSON() string {
	jsonMessage, err := json.Marshal(message)

	if(err != nil) {
		log.Fatal(err)
		return ""
	}

	return string(jsonMessage)
}

func NewMessageFromJSON(jsonString string) (*Message, error) {
	var data Message
	err := json.Unmarshal([]byte(jsonString), &data)

	if(err != nil) {
		return nil, err
	}

	return &data, nil
}