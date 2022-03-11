export default function OrderLinks({ orderBy, setOrderBy }) {
  const orderBys = [
    { name: 'Descending', apiName: 'desc' },
    { name: 'Ascending', apiName: 'asc' },
  ];

  const handleChange = (e) => {
    setOrderBy(e.target.value);
  };

  return (
    <div className="sort-order-links">
      <label htmlFor="order-by">Order by:</label>
      <select
        className="sort-selector"
        onChange={handleChange}
        name="order-by"
        id="order-by"
        value={orderBy} //Keeps this as the selected choice after render
      >
        {orderBys.map((order, index) => {
          return (
            <option key={order.name} value={order.apiName}>
              {order.name}
            </option>
          );
        })}
      </select>
    </div>
  );
}
