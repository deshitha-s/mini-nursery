import { useState } from "react";
import type {
  NewPlant,
  Difficulty,
  Light,
  Water,
  Rarity,
} from "../types";

type Props = {
  onAdd: (plant: NewPlant) => void;
};

export default function PlantForm({ onAdd }: Props) {
  const [name, setName] = useState("");
  const [scientific, setScientific] = useState("");

  const [difficulty, setDifficulty] = useState<Difficulty>("Easy");
  const [light, setLight] = useState<Light>("Low");
  const [water, setWater] = useState<Water>("Low");
  const [rarity, setRarity] = useState<Rarity>("Common");

  const [description, setDescription] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim()) {
      alert("Plant name is required");
      return;
    }

    const newPlant: NewPlant = {
      name,
      scientific,
      difficulty,
      light,
      water,
      rarity,
      description,
    };

    onAdd(newPlant);

    // Clear form
    setName("");
    setScientific("");
    setDifficulty("Easy");
    setLight("Low");
    setWater("Low");
    setRarity("Common");
    setDescription("");
  };

  return (
    <form className="card p-3 shadow-sm" onSubmit={handleSubmit}>
      <h5 className="mb-3">Add New Plant</h5>

      <div className="mb-2">
        <label className="form-label">Name</label>
        <input
          className="form-control"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div className="mb-2">
        <label className="form-label">Scientific Name</label>
        <input
          className="form-control"
          value={scientific}
          onChange={(e) => setScientific(e.target.value)}
        />
      </div>

      <div className="row">
        <div className="col-md-4">
          <label className="form-label">Difficulty</label>
          <select
            className="form-select"
            value={difficulty}
            onChange={(e) =>
              setDifficulty(e.target.value as Difficulty)
            }
          >
            <option>Easy</option>
            <option>Medium</option>
            <option>Hard</option>
          </select>
        </div>

        <div className="col-md-4">
          <label className="form-label">Light</label>
          <select
            className="form-select"
            value={light}
            onChange={(e) => setLight(e.target.value as Light)}
          >
            <option>Low</option>
            <option>Medium</option>
            <option>Bright</option>
          </select>
        </div>

        <div className="col-md-4">
          <label className="form-label">Water</label>
          <select
            className="form-select"
            value={water}
            onChange={(e) => setWater(e.target.value as Water)}
          >
            <option>Low</option>
            <option>Moderate</option>
            <option>Frequent</option>
          </select>
        </div>
      </div>

      <div className="mt-2">
        <label className="form-label">Rarity</label>
        <select
          className="form-select"
          value={rarity}
          onChange={(e) => setRarity(e.target.value as Rarity)}
        >
          <option>Common</option>
          <option>Uncommon</option>
          <option>Rare</option>
        </select>
      </div>

      <div className="mt-2">
        <label className="form-label">Description</label>
        <textarea
          className="form-control"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>

      <button className="btn btn-success mt-3 w-100">Add Plant</button>
    </form>
  );
}
