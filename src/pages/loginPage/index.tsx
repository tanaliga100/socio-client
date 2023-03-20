import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import { Grid, IconButton } from "@mui/material";
import Form from "../../components/UI/Form";
import Widgets from "../../components/UI/Widgets";
import { setMode } from "../../state/auth-slice";
import { useAppDispatch } from "../../state/hooks";

const LoginPage = () => {
  const dispatch = useAppDispatch();

  return (
    <Grid
      container
      textAlign="center"
      alignItems="center"
      justifyContent="center"
      direction="column"
      sx={{ padding: "1rem", marginTop: "5rem" }}
    >
      <Grid item xs={12} textAlign="center" md={6}>
        <IconButton size="small" onClick={() => dispatch(setMode())}>
          <LightModeOutlinedIcon />
        </IconButton>
        <Widgets />
      </Grid>
      <Grid item xs={12} md={6}>
        <Form />
      </Grid>
    </Grid>
  );
};
export default LoginPage;
