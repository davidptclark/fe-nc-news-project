import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function OrderLinks({ orderBy, setOrderBy }) {
  const orderBys = [
    { name: "Descending", apiName: "desc" },
    { name: "Ascending", apiName: "asc" },
  ];

  const handleChange = (e) => {
    setOrderBy(e.target.value);
  };

  return (
    <FormControl sx={{ boxShadow: 3, m: 1, minWidth: 100 }}>
      <InputLabel
        sx={{
          fontFamily: "Quicksand",
        }}
      >
        Order by
      </InputLabel>
      <Select
        sx={{
          fontFamily: "Quicksand",
        }}
        value={orderBy}
        label="Sort by"
        onChange={handleChange}
      >
        {orderBys.map((order, index) => {
          return (
            <MenuItem
              sx={{
                fontFamily: "Quicksand",
              }}
              key={order.name}
              value={order.apiName}
            >
              {order.name}
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
}
