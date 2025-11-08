export default function SearchBar({ onSearch }) {
  return (
    <input
      type="text"
      placeholder="Buscar por nombre..."
      onChange={e => onSearch(e.target.value)}
      className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300 mb-4"
    />
  );
}