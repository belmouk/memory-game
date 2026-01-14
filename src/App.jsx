import { useState } from "react";
import "./App.css";

const baseUrl =
  "https://raw.githubusercontent.com/PokeAPI/sprites/refs/heads/master/sprites/pokemon/other/dream-world/100";

const POKEMONS = [
  { id: 1, name: "Deoxys", imageUrl: baseUrl + "01.svg", selected: false },
  { id: 2, name: "Castform", imageUrl: baseUrl + "13.svg", selected: false },
  { id: 3, name: "Thundurus", imageUrl: baseUrl + "20.svg", selected: false },
  { id: 4, name: "Cheniselle", imageUrl: baseUrl + "04.svg", selected: false },
  { id: 5, name: "Kyurem", imageUrl: baseUrl + "23.svg", selected: false },
  { id: 6, name: "Shaymin", imageUrl: baseUrl + "06.svg", selected: false },
  { id: 7, name: "Giratina", imageUrl: baseUrl + "07.svg", selected: false },
  { id: 8, name: "Pumpkaboo", imageUrl: baseUrl + "27.svg", selected: false },
  { id: 9, name: "Basculin", imageUrl: baseUrl + "16.svg", selected: false },
  { id: 10, name: "Gourgeist", imageUrl: baseUrl + "30.svg", selected: false },
  { id: 11, name: "Meloetta", imageUrl: baseUrl + "18.svg", selected: false },
  { id: 12, name: "Tornadus", imageUrl: baseUrl + "19.svg", selected: false },
];

function App() {
  const [pokemonList, setPokemonList] = useState(
    shuffleList(POKEMONS.map((p) => ({ ...p })))
  );
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  function shuffleList(list) {
    const shuffledList = [];
    const newList = [...list];
    while (newList.length !== 0) {
      const randomIndex = Math.floor(Math.random() * newList.length);
      shuffledList.push(...newList.splice(randomIndex, 1));
    }
    return shuffledList;
  }

  return (
    <>
      <header>
        <h1>Pokemon Memory Game!</h1>
      </header>
      <main>
        <div className="score-section">
          <span>Score: {score}</span>
          <span>Best score: {bestScore}</span>
        </div>

        <div className="card-section">
          {pokemonList.map((pokemon) => {
            return (
              <Card
                name={pokemon.name}
                imageUrl={pokemon.imageUrl}
                key={pokemon.id}
                handleClick={() => {
                  if (pokemon.selected) {
                    if (score > bestScore) {
                      setBestScore(score);
                    }
                    setScore(0);
                    setPokemonList(
                      shuffleList(POKEMONS.map((p) => ({ ...p })))
                    );
                  } else {
                    const nextPokemonList = pokemonList.map((item) => {
                      if (item.id === pokemon.id) {
                        return { ...item, selected: true };
                      }
                      return item;
                    });
                    setScore(score + 1);
                    setPokemonList(shuffleList(nextPokemonList));
                  }
                }}
              ></Card>
            );
          })}
        </div>
      </main>
    </>
  );
}

function Card({ imageUrl, name, handleClick }) {
  return (
    <button onClick={handleClick} className="card">
      <div className="card-image">
        <img src={imageUrl} alt={`${name} pokemon`} />
      </div>
      <h3>{name}</h3>
    </button>
  );
}

export default App;
