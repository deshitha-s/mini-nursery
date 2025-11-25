import { useMemo, useState } from "react";
import { type Plant, type NewPlant } from "./types";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Banner from "./components/Banner";
import PlantList from "./components/PlantList";
import PlantCard from "./components/PlantCard";
import PlantForm from "./components/PlantForm";
import PeopleDropdown from "./components/PeopleDropdown";

export default function App({ initialPlants }: { initialPlants: Plant[] }) {
  const [plants, setPlants] = useState(initialPlants);
  const [selectedId, setSelectedId] = useState<number | null>(null);

  const [search, setSearch] = useState("");
  const [difficulty, setDifficulty] = useState("All");

  const selectedPlant = plants.find((p) => p.id === selectedId) || null;

  const filteredPlants = useMemo(() => {
    return plants.filter((p) => {
      const matchesSearch = p.name.toLowerCase().includes(search.toLowerCase());
      const matchesDifficulty =
        difficulty === "All" || p.difficulty === difficulty;

      return matchesSearch && matchesDifficulty;
    });
  }, [plants, search, difficulty]);

  function handleAdd(newPlant: NewPlant) {
    const plant: Plant = {
      id: Math.max(0, ...plants.map((p) => p.id)) + 1,
      ...newPlant,
    };

    setPlants([...plants, plant]);
  }

  function handleDelete(id: number) {
    setPlants(plants.filter((p) => p.id !== id));
    if (selectedId === id) setSelectedId(null);
  }

  return (
    <>
      <Header />

      <Banner>
        <h2>Welcome to the Mini Nursery</h2>
      </Banner>

      <div className="container">

        {/* Search + Filter */}
        <input
          className="form-control mb-2"
          placeholder="Search plants..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          className="form-select mb-3"
          value={difficulty}
          onChange={(e) => setDifficulty(e.target.value)}
        >
          <option>All</option>
          <option>Easy</option>
          <option>Medium</option>
          <option>Hard</option>
        </select>

        <button
          className="btn btn-secondary mb-3"
          onClick={() => {
            setSearch("");
            setDifficulty("All");
          }}
        >
          Reset Filters
        </button>

        <div className="row">
          <div className="col-md-4">

            <PlantList
              plants={filteredPlants}
              selectedId={selectedId}
              onSelect={setSelectedId}
            />

            <PeopleDropdown onSelect={(user) => console.log(user)} />
          </div>

          <div className="col-md-8">

            <PlantForm onAdd={handleAdd} />

            {selectedPlant && (
              <PlantCard plant={selectedPlant} onDelete={handleDelete} />
            )}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
