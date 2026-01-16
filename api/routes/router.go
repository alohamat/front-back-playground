package routes

import (
	"github.com/alohamat/front-back-playground/handlers"
	"github.com/gorilla/mux"
)

func InitRouter() *mux.Router {
	router := mux.NewRouter()

	router.HandleFunc("/postsum", handlers.PostHandler).Methods("POST")
	router.HandleFunc("/getsum", handlers.GetHandler).Methods("GET")
	return router
}