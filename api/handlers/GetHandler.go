package handlers

import (
	"encoding/json"
	"net/http"
	"fmt"
)

func GetHandler(w http.ResponseWriter, r *http.Request) {
	if (r.Method != http.MethodGet) {
		http.Error(w, "wrong method (need get)", http.StatusMethodNotAllowed)
		return
	}

	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusOK)

	fmt.Println("Got a GET")
	json.NewEncoder(w).Encode(response{Message: "take your get"})
}