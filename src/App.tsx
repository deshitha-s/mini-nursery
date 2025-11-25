import type { Plant } from "./types";
import PlantList from "./PlantList";
import PlantCard from "./PlantCard";
import PlantForm from "./PlantForm";

export type AppProps = {
  plants: Plant[];
};

export default function App({ plants }: AppProps) {
  const selectedId = plants[0].id;    // fixed selection
  const selectedPlant = plants.find(p => p.id === selectedId)!;

  const handleSelect = () => {};      // dummy function since useState is forbidden

  return (
    <div className="container py-4">
      <h2 className="mb-3">Mini Nursery</h2>

      <input className="form-control mb-3" placeholder="Search plants..." disabled />

      <div className="row">
        <div className="col-md-4">
          <PlantList
            plants={plants}
            selectedId={selectedId}
            onSelect={handleSelect}
          />
        </div>

        <div className="col-md-8">
          <PlantForm />

          <div className="mt-3">
            <PlantCard plant={selectedPlant} />
          </div>
        </div>
      </div>
    </div>
  );
}
