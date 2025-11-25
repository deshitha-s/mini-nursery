import type { Plant } from "../types";

export type PlantListProps = {
  plants: Plant[];
  selectedId: number | null;
  onSelect: (id: number) => void;
};

export default function PlantList({ plants, selectedId, onSelect }: PlantListProps) {
  return (
    <ul className="list-group">
      {plants.map((p) => (
        <li
          key={p.id}
          className={`list-group-item ${selectedId === p.id ? "active" : ""}`}
          style={{ cursor: "pointer" }}
          onClick={() => onSelect(p.id)}
        >
          <strong>{p.name}</strong>
          <br />
          <small className="text-muted">{p.scientific}</small>
        </li>
      ))}
    </ul>
  );
}
