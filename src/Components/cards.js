import React from "react";
import Card from "./card";
import imagen1 from "./../assets/git.jpeg";
import imagen2 from "./../assets/java.jpeg";
import imagen3 from "./../assets/react.jpeg";

const informacionTarjeta = [
  {
    id: 1,
    titulo: "Curso de Git",
    imagen: imagen1,
    instructor: "Wuicho Danis",
  },
  {
    id: 2,
    titulo: "Curso de Java",
    imagen: imagen2,
    instructor: "Pepe Bunny",
  },
  {
    id: 3,
    titulo: "Curso de React",
    imagen: imagen3,
    instructor: "Francisco Javier",
  },
];

export default function cards() {

  return (
    <>
      <div className="container d-flex justify-content-center align-items-center h-100">
        <div className="row">
          {informacionTarjeta.map((x) => (
            <div className="col-md-4" key={x.titulo}>
              <Card
                key={x.id}
                id={x.id}
                title={x.titulo}
                image={x.imagen}
                instructor={x.instructor}
              ></Card>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
