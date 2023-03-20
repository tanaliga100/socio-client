import { Stack, Typography } from "@mui/material";
import React from "react";

const Widgets: React.FC = () => {
  return (
    <Stack>
      <Typography fontWeight="bold" color="primary" variant="h2">
        socioLive
      </Typography>
      <Typography fontWeight="500" sx={{ mb: "1.5rem" }} color="warning">
        Welcome to socioLive, the Social Media for Sociopaths!
      </Typography>
    </Stack>
  );
};

export default Widgets;
