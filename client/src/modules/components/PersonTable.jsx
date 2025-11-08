export default function PersonTable({ persons, onEdit, onDelete }) {
  return (
    <div className="overflow-x-auto mt-6">
      <table className="min-w-full bg-white rounded shadow">
        <thead className="bg-gray-100">
          <tr>
            <th className="text-left px-4 py-2">Nombre</th>
            <th className="text-left px-4 py-2">Email</th>
            <th className="text-left px-4 py-2">Teléfono</th>
            <th className="text-left px-4 py-2">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {persons.map(p => (
            <tr key={p.id} className="border-t">
              <td className="px-4 py-2">{p.name}</td>
              <td className="px-4 py-2">{p.email}</td>
              <td className="px-4 py-2">{p.phoneNumber}</td>
              <td className="px-4 py-2 space-x-2">
                <button
                  onClick={() => onEdit(p)}
                  className="text-blue-600 hover:underline"
                >
                  ✏️ Editar
                </button>
                <button
                  onClick={() => onDelete(p.id)}
                  className="text-red-600 hover:underline"
                >
                  🗑️ Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}