import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function SortLinks({ sortBy, setSortBy }) {
  const sortBys = [
    { name: "Date", apiName: "created_at" },
    { name: "Comments", apiName: "comment_count" },
    { name: "Votes", apiName: "votes" },
  ];

  const handleChange = (e) => {
    setSortBy(e.target.value);
  };

  return (
    <FormControl sx={{ boxShadow: 3, m: 1, minWidth: 100 }}>
      <InputLabel
        sx={{
          fontFamily: "Quicksand",
        }}
      >
        Sort by
      </InputLabel>
      <Select
        sx={{
          fontFamily: "Quicksand",
        }}
        value={sortBy}
        label="Sort by"
        onChange={handleChange}
      >
        {sortBys.map((sort, index) => {
          return (
            <MenuItem
              sx={{
                fontFamily: "Quicksand",
              }}
              key={sort.name}
              value={sort.apiName}
            >
              {sort.name}
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
}

// <div className="sort-order-links">
//   <label htmlFor="sort-by">Sort by:</label>
//   <select
//     className="sort-selector"
//     onChange={handleChange}
//     name="sort-by"
//     id="sort-by"
//     value={sortBy} //Keeps this as the selected choice after render
//   >
//     {sortBys.map((sort, index) => {
//       return (
//         <option key={sort.name} value={sort.apiName}>
//           {sort.name}
//         </option>
//       );
//     })}
//   </select>
// </div>
