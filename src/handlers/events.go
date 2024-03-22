package handlers

import (
	"encoding/json"
	"log"
)

type Event struct {
	EventName string `json:"event_name"`
	Message   string `json:"message"`
}

func (event Event) ToJSON() string {
	jsonMessage, err := json.Marshal(event)

	if err != nil {
		log.Fatal(err)
		return ""
	}

	return string(jsonMessage)
}