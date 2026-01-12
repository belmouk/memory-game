import { useEffect, useState } from "react";
import "./App.css";

const baseUrl =
  "https://raw.githubusercontent.com/PokeAPI/sprites/refs/heads/master/sprites/pokemon/other/dream-world/100";

const POKEMONS = [
  { name: "Deoxys", imageUrl: baseUrl + "01.svg" },
  { name: "Castform", imageUrl: baseUrl + "13.svg" },
  { name: "Thundurus", imageUrl: baseUrl + "20.svg" },
  { name: "Cheniselle", imageUrl: baseUrl + "04.svg" },
  { name: "Kyurem", imageUrl: baseUrl + "23.svg" },
  { name: "Shaymin", imageUrl: baseUrl + "06.svg" },
  { name: "Giratina", imageUrl: baseUrl + "07.svg" },
  { name: "Rotom", imageUrl: baseUrl + "08.svg" },
  { name: "Basculin", imageUrl: baseUrl + "16.svg" },
  { name: "Gourgeist", imageUrl: baseUrl + "30.svg" },
  { name: "Meloetta", imageUrl: baseUrl + "18.svg" },
  { name: "Tornadus", imageUrl: baseUrl + "19.svg" },
];

function App() {
  return (
    <>
      <header>
        <h1>Pokemon Memory Game!</h1>
      </header>
      <main>
        <Score></Score>
        {POKEMONS.map((pokemon, index) => {
          return (
            <Card
              name={pokemon.name}
              imageUrl={pokemon.imageUrl}
              key={index}
            ></Card>
          );
        })}
      </main>
    </>
  );
}

function Score() {}

function Card({ imageUrl, name }) {
  return (
    <div>
      <img src={imageUrl} alt="" />
      <h3>{name}</h3>
    </div>
  );
}

export default App;
