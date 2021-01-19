import React, { useState, useEffect } from "react";
import pet, { ANIMALS } from "@frontendmasters/pet";
import Results from "./Results";
import useDropdown from "../hooks/useDropdown";

const SearchParams = () => {
  const [location, setLocation] = useState("Seattle, WA");
  const [breeds, setBreeds] = useState([]);
  const [animal, AnimalDropdown] = useDropdown("Animal", "dog", ANIMALS);
  const [breed, BreedDropdown, setBreed] = useDropdown("Breed", "", breeds);
  const [pets, setPets] = useState([]);

  function requestPets() {
    pet
      .animals({
        location,
        breed,
        type: animal,
      })
      .then((petsData) => {
        const { animals } = petsData;
        setPets(animals || []);
      });
  }

  useEffect(() => {
    setBreeds([]);
    setBreed("");

    pet.breeds(animal).then(({ breeds }) => {
      const breedStrs = breeds.map(({ name }) => name);
      setBreeds(breedStrs);
    }, console.error); // TODO: better error handling
  }, [animal, setBreed, setBreeds]);

  return (
    <div className="search-params">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          requestPets();
        }}
      >
        <label htmlFor="location">
          Location
          <input
            id="location"
            value={location}
            placeholder="location"
            onChange={(e) => setLocation(e.target.value)}
          />
        </label>
        <AnimalDropdown />
        <BreedDropdown />
        <button>Submit</button>
      </form>
      <Results pets={pets} />
    </div>
  );
};

export default SearchParams;
