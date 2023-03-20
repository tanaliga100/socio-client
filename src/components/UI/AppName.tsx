import { Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const AppName = () => {
  const navigate = useNavigate();
  return (
    <Typography
      fontWeight="bold"
      fontSize="clamp(1rem, 2rem, 2.25rem)"
      color="primary"
      sx={{
        "&:hover": {
          color: "primary",
          cursor: "pointer",
        },
      }}
    >
      socioLive
    </Typography>
  );
};

export default AppName;
