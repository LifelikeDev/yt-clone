import React from "react";
import { Stack } from "@mui/system";
import { categories } from "../../utils/constants";

const Sidebar = ({ selectedCategory, setSelectedCategory }) => {
  return (
    <Stack
      direction="row"
      sx={{
        overflowY: "auto",
        height: { sx: "auto", md: "95%" },
        flexDirection: { md: "column" },
      }}
    >
      {categories.map(({ name, icon }, idx) => (
        <button
          key={idx}
          className="category-btn"
          style={{
            backgroundColor: name === selectedCategory && "#FC1503",
            color: "white",
          }}
          onClick={() => setSelectedCategory(name)}
        >
          <span
            style={{
              color: name === selectedCategory ? "white" : "red",
              marginRight: "15px",
            }}
          >
            {icon}
          </span>
          <span
            style={{
              opacity: name === selectedCategory ? 1 : 0.8,
            }}
          >
            {name}
          </span>
        </button>
      ))}
    </Stack>
  );
};

export default Sidebar;
