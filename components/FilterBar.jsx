"use client";

export default function FilterBar({
  categories,
  cities,
  selectedCategory,
  selectedCity,
  onCategoryChange,
  onCityChange,
}) {
  return (
    <div className="flex flex-wrap gap-4 mb-8">
      {/* Category */}
      <select
        value={selectedCategory}
        onChange={(e) => onCategoryChange(e.target.value)}
        className="bg-[#12121A] border border-white/10 rounded-lg px-4 py-2 text-white"
      >
        <option value="all">All Genres</option>
        {categories.map((cat) => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </select>

      {/* City */}
      <select
        value={selectedCity}
        onChange={(e) => onCityChange(e.target.value)}
        className="bg-[#12121A] border border-white/10 rounded-lg px-4 py-2 text-white"
      >
        <option value="all">All Cities</option>
        {cities.map((city) => (
          <option key={city} value={city}>
            {city}
          </option>
        ))}
      </select>
    </div>
  );
}
