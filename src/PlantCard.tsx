import type { Plant } from "./types";

export type PlantCardProps = {
  plant: Plant;
};

export default function PlantCard({ plant }: PlantCardProps) {
  return (
    <div className="card shadow-sm">
      <div className="card-body">
        <h5 className="card-title">
          {plant.name}
          <br />
          <small className="text-muted">{plant.scientific}</small>
        </h5>

        <p className="card-text">{plant.description}</p>

        <p>
          <span className="badge bg-primary me-2">{plant.difficulty}</span>
          {plant.rarity && (
            <span className="badge bg-warning text-dark">{plant.rarity}</span>
          )}
        </p>

        <p>
          <strong>Light:</strong>{" "}
          {plant.light === "Low" ? "🌑" : plant.light === "Medium" ? "⛅" : "☀️"}
        </p>

        <p>
          <strong>Water:</strong>{" "}
          {plant.water === "Low" ? "💧" : plant.water === "Moderate" ? "💧💧" : "💧💧💧"}
        </p>

        <button className="btn btn-secondary me-2" disabled>View</button>
        <button className="btn btn-success" disabled>Buy</button>
      </div>
    </div>
  );
}
