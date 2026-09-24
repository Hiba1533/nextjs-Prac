interface CategoryListProps {
  categories: string[];
  selected: string;
  onSelect: (category: string) => void;
}

export default function CategoryList({
  categories,
  selected,
  onSelect,
}: CategoryListProps) {
  return (
    <div className="max-w-6xl mx-auto px-4 mt-8 flex flex-wrap gap-2">
      <button
        onClick={() => onSelect("all")}
        className={
          selected === "all"
            ? "bg-blue-600 text-white px-4 py-2 rounded-full text-sm"
            : "bg-white text-gray-700 px-4 py-2 rounded-full text-sm border border-gray-200 hover:bg-gray-50"
        }
      >
        All
      </button>

      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => onSelect(cat)}
          className={
            selected === cat
              ? "bg-blue-600 text-white px-4 py-2 rounded-full text-sm capitalize"
              : "bg-white text-gray-700 px-4 py-2 rounded-full text-sm border border-gray-200 hover:bg-gray-50 capitalize"
          }
        >
          {cat}
        </button>
      ))}
    </div>
  );
}