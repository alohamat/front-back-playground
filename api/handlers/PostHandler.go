package handlers

import (
	"encoding/json"
	"net/http"
	"fmt"
)

type reqType struct {
	Text string `json:"data"`
}

type response struct {
	Message string `json:"message"`
}

func PostHandler(w http.ResponseWriter, r *http.Request) {
	if (r.Method != http.MethodPost) {
		http.Error(w, "Wrong method (i need POST)", http.StatusMethodNotAllowed)
		return
	}
	var req reqType

	err := json.NewDecoder(r.Body).Decode(&req)
	if err != nil {
		http.Error(w, "malformed request", http.StatusBadRequest)
		return
	}

	var res string = "Pong! You sent: " + req.Text
	fmt.Printf("got a POST: %s\n", req.Text)
	json.NewEncoder(w).Encode(response{Message: res})
}
