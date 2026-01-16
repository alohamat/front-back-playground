package handlers

import (
	"encoding/json"
	"net/http"
)

type reqType struct {
	Text string `json:"text"`
}

type response struct {
	Message string `json:"message"`
}

func PostHandler(w http.ResponseWriter, r *http.Request) {
	var req reqType
	err := json.NewDecoder(r.Body).Decode(&req)
	if err != nil {
		http.Error(w, "malformed request", http.StatusBadRequest)
		return
	}
	json.NewEncoder(w).Encode(response{Message: "Pong!"})
}
