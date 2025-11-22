package main

import (
	"html/template"
	"net/http"
)

func main() {
	http.Handle("/static/", http.StripPrefix("/static/", http.FileServer(http.Dir("static"))))
	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		tmpl := template.Must(template.ParseFiles("templates/hello.html"))
		data := struct {
			Message string
		}{
			Message: "hello world!",
		}
		tmpl.Execute(w, data)
	})
	http.ListenAndServe(":8080", nil)
}
