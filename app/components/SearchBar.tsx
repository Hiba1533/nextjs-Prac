interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

export default function SearchBar({ value, onChange }: SearchBarProps) {
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    onChange(e.target.value);
  }

  return (
    <div className="max-w-6xl mx-auto px-4 -mt-6 relative z-10">
      <input
        type="text"
        value={value}
        onChange={handleChange}
        placeholder="Search products..."
        className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
}