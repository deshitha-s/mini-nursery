export default function PlantForm() {
  return (
    <form className="card p-3 shadow-sm">
      <h5>Add New Plant</h5>

      <div className="mb-2">
        <label className="form-label">Name</label>
        <input className="form-control" disabled />
      </div>

      <div className="mb-2">
        <label className="form-label">Scientific Name</label>
        <input className="form-control" disabled />
      </div>

      <div className="mb-2">
        <label className="form-label">Difficulty</label>
        <select className="form-select" disabled>
          <option>Easy</option>
          <option>Medium</option>
          <option>Hard</option>
        </select>
      </div>

      <div className="mb-2">
        <label className="form-label">Light</label>
        <select className="form-select" disabled>
          <option>Low</option>
          <option>Medium</option>
          <option>Bright</option>
        </select>
      </div>

      <div className="mb-2">
        <label className="form-label">Water</label>
        <select className="form-select" disabled>
          <option>Low</option>
          <option>Moderate</option>
          <option>Frequent</option>
        </select>
      </div>

      <div className="mb-2">
        <label className="form-label">Description</label>
        <textarea className="form-control" disabled rows={3}></textarea>
      </div>

      <button className="btn btn-primary me-2" disabled>Add Plant</button>
      <button className="btn btn-warning" disabled>Clear</button>
    </form>
  );
}
