import React from "react";
import { Link } from "react-router-dom";
import { Stack } from "@mui/system";

import { logo } from "../utils/constants";
import SearchBar from "./SearchBar";

const Navbar = () => (
  <Stack
    direction="row"
    alignItems="center"
    p={2}
    sx={{
      position: "sticky",
      background: "#222",
      top: 0,
      justifyContent: "space-between",
    }}
  >
    <Link
      to="/"
      style={{
        display: "flex",
        alignItems: "center",
        marginLeft: "3%",
      }}
    >
      <img src={logo} alt="logo" height={45} />
    </Link>
    <SearchBar />
  </Stack>
);
export default Navbar;
