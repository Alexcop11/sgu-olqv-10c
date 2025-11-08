import { useState } from "react";
export default function PersonForm({ onSubmit, initialData = {}, mode = 'add' }) {
  const [form, setForm] = useState({
    name: initialData?.name || '',
    email: initialData?.email || '',
    phoneNumber: initialData?.phoneNumber || '',
  });


  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(form);
    setForm({ name: '', email: '', phoneNumber: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">Nombre</label>
        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring focus:ring-blue-300"
          placeholder="Juan Pérez"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Email</label>
        <input
          name="email"
          value={form.email}
          onChange={handleChange}
          className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring focus:ring-blue-300"
          placeholder="juanperez@example.com"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Teléfono</label>
        <input
          name="phoneNumber"
          value={form.phoneNumber}
          onChange={handleChange}
          className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring focus:ring-blue-300"
          placeholder="+34123456789"
        />
      </div>
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
      >
        {mode === 'edit' ? 'Actualizar' : 'Agregar'}
      </button>
    </form>
  );
}