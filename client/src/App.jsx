import { useEffect, useState } from "react";
import PersonForm from "./modules/components/PersonForm"
import PersonTable from "./modules/components/PersonTable"
import SearchBar from "./modules/components/SearchBar"

const API = 'http://localhost:8081/api/persons';

export default function App() {
  const [persons, setPersons] = useState([]);
  const [editing, setEditing] = useState(null);

  const fetchPersons = async () => {
    const res = await fetch(API);
    const data = await res.json();
    setPersons(data);
  };

  useEffect(() => { fetchPersons(); }, []);

  const handleAdd = async person => {
    await fetch(API, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(person),
    });
    fetchPersons();
  };

  const handleUpdate = async person => {
    await fetch(API, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(person),
    });
    setEditing(null);
    fetchPersons();
  };


  const handleDelete = async id => {
    await fetch(API, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id }),
    });
    fetchPersons();
  };


  const handleSearch = term => {
    const filtered = persons.filter(p =>
      p.name.toLowerCase().includes(term.toLowerCase())
    );
    setPersons(filtered.length ? filtered : []);
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <SearchBar onSearch={handleSearch} />
      <PersonForm
        onSubmit={editing ? handleUpdate : handleAdd}
        initialData={editing}
        mode={editing ? 'edit' : 'add'}
      />
      <PersonTable persons={persons} onEdit={setEditing} onDelete={handleDelete} />
    </div>
  );
}