import React from "react";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <Box>
      <Typography variant="h4">NotFoundPage</Typography>
      <Typography variant="p">
        Pls go <Link to={"/"}>home</Link>
      </Typography>
    </Box>
  );
};

export { NotFoundPage };
