export default function SortLinks({ sortBy, setSortBy, setQueryParams }) {
  const sortBys = [
    { name: 'Date', apiName: 'created_at' },
    { name: 'Comments', apiName: 'comment_count' },
    { name: 'Votes', apiName: 'votes' },
  ];

  const handleChange = (e) => {
    setSortBy(e.target.value);
    setQueryParams({ sort_by: e.target.value });
  };

  return (
    <div className="sort-order-links">
      <label htmlFor="sort-by">Sort by:</label>
      <select
        className="sort-selector"
        onChange={handleChange}
        name="sort-by"
        id="sort-by"
        value={sortBy} //Keeps this as the selected choice after render
      >
        {sortBys.map((sort, index) => {
          return (
            <option key={index} value={sort.apiName}>
              {sort.name}
            </option>
          );
        })}
      </select>
    </div>
  );
}
