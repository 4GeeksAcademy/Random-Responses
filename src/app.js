/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  console.log("Hello Rigo from the console!");
  let who = ["La bruja", "El niño", "El anciano", "La paloma", "El avion"];
  let action = [
    "Bailo en",
    "Deshizo un hechizo en",
    "Salto en",
    "Grito en",
    "Trabajo en"
  ];
  let place = [
    "la piscina",
    "la cabaña en el bosque",
    "la pista de patinaje",
    "la playa",
    "la granja amarilla"
  ];

  let randomwho = Math.floor(Math.random() * who.length);
  let randomaction = Math.floor(Math.random() * action.length);
  let randomplace = Math.floor(Math.random() * place.length);
  document.querySelector("#excuse").innerHTML =
    who[randomwho] + " " + action[randomaction] + " " + place[randomplace];
};
