import type { Plant } from "./types";

export type PlantListProps = {
  plants: Plant[];
  selectedId: number;
  onSelect: (id: number) => void;
};

export default function PlantList({ plants, selectedId, onSelect }: PlantListProps) {
  return (
    <ul className="list-group">
      {plants.map((p) => (
        <li
          key={p.id}
          className={`list-group-item d-flex justify-content-between align-items-center 
          ${selectedId === p.id ? "active" : ""}`}
          style={{ cursor: "pointer" }}
          onClick={() => onSelect(p.id)}
        >
          <div>
            <strong>{p.name}</strong>
            <br />
            <small className="text-muted">{p.scientific}</small>
          </div>

          <div>
            <span className="badge bg-primary me-2">{p.difficulty}</span>
            {p.rarity && <span className="badge bg-warning text-dark">{p.rarity}</span>}
          </div>
        </li>
      ))}
    </ul>
  );
}
