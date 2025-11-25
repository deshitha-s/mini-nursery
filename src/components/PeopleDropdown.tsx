    import { useEffect, useState } from "react";
import { getUsers, type User } from "../services/UserService";

export type PeopleDropdownProps = {
  onSelect: (user: User) => void;
};

export default function PeopleDropdown({ onSelect }: PeopleDropdownProps) {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [selected, setSelected] = useState<User | null>(null);

  useEffect(() => {
    getUsers()
      .then((u) => setUsers(u))
      .catch(() => setError("Failed to load users"))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <div className="spinner-border"></div>;
  if (error) return <div className="alert alert-danger">{error}</div>;

  return (
    <>
      <select
        className="form-select mb-3"
        onChange={(e) => {
          const user = users.find((u) => u.id === Number(e.target.value));
          if (user) {
            setSelected(user);
            onSelect(user);
          }
        }}
      >
        <option>Select a user</option>
        {users.map((u) => (
          <option key={u.id} value={u.id}>{u.name}</option>
        ))}
      </select>

      {selected && (
        <div className="card p-3 mb-3">
          <h5>{selected.name}</h5>
          <p>Email: {selected.email}</p>
          <p>Phone: {selected.phone}</p>
        </div>
      )}
    </>
  );
}
