export default function SearchBar({ search, setSearch }) {
  return (
    <label className="search-field">
      <span className="search-icon" aria-hidden="true">⌕</span>
      <input
        type="search"
        value={search}
        onChange={(event) => setSearch(event.target.value)}
        placeholder="Search by name, email or major..."
        aria-label="Search students"
      />
      {search && (
        <button type="button" className="clear-search" onClick={() => setSearch("")} aria-label="Clear search">×</button>
      )}
    </label>
  );
}
