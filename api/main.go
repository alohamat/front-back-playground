package main

import (
	"log"
	"net/http"
	"github.com/alohamat/front-back-playground/routes"
	"github.com/alohamat/front-back-playground/middlewares"


)

func main() {
	r := routes.InitRouter()
	handler := middlewares.CorsMiddleware(r)

	log.Println("Server running at 8080")
	log.Fatalln(http.ListenAndServe(":8080", handler))
}