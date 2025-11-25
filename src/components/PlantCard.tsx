import type { Plant } from "../types";

export type PlantCardProps = {
  plant: Plant;
  onDelete: (id: number) => void;
};

export default function PlantCard({ plant, onDelete }: PlantCardProps) {
  const lightIcon =
    plant.light === "Low" ? "🌑" : plant.light === "Medium" ? "⛅" : "☀️";

  const waterIcon =
    plant.water === "Low"
      ? "💧"
      : plant.water === "Moderate"
      ? "💧💧"
      : "💧💧💧";

  return (
    <div className="card shadow-sm">
      <div className="card-body">
        <h4>
          {plant.name}
          <br />
          <small className="text-muted">{plant.scientific}</small>
        </h4>

        <p>{plant.description}</p>

        <p>
          <span className="badge bg-primary me-2">{plant.difficulty}</span>
          {plant.rarity && (
            <span className="badge bg-warning text-dark">{plant.rarity}</span>
          )}
        </p>

        <p><strong>Light:</strong> {lightIcon}</p>
        <p><strong>Water:</strong> {waterIcon}</p>

        <button
          className="btn btn-info me-2"
          onClick={() => alert(`Viewing ${plant.name}`)}
        >
          View Details
        </button>

        <button
          className="btn btn-danger"
          onClick={() => onDelete(plant.id)}
        >
          Remove
        </button>
      </div>
    </div>
  );
}
