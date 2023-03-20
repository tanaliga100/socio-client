import { Button, Container, Stack, TextField, Typography } from "@mui/material";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { InputsLogin } from "../../interfaces/allModel";
import { useAppDispatch } from "../../main";
import { setLogin } from "../../state/auth-slice";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm<InputsLogin>();
  const onSubmit: SubmitHandler<InputsLogin> = async (data) => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_APP_URL}/auth/login`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );
      if (!response.ok) {
        throw new Error("Failed to submit form data.");
      }
      const loggedInUser = await response.json();
      console.log("LOGGED USER", loggedInUser);
      // Store the token and current user
      if (loggedInUser) {
        dispatch(
          setLogin({ user: loggedInUser.user, token: loggedInUser.token })
        );
        setTimeout(() => {
          navigate("/home");
        }, 300);
      }
    } catch (error: any) {
      console.log("error", error?.message);
    }
    reset();
  };
  return (
    <Container fixed>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack direction={{ xs: "column", sm: "column" }}>
          <TextField
            label="Email"
            variant="standard"
            type="email"
            {...register("email", { required: true })}
            name="email"
          />
          {errors.email && (
            <Typography color="error">Email is required</Typography>
          )}
          <TextField
            sx={{ mt: 1 }}
            label="Password"
            variant="standard"
            type="password"
            {...register("password", { required: true })}
            name="password"
          />
          {errors.password && (
            <Typography color="error">Password is required</Typography>
          )}
        </Stack>
        <Button
          type="submit"
          variant="contained"
          sx={{ paddingX: "2rem", margin: "2rem" }}
        >
          <Typography>Login</Typography>
        </Button>
      </form>
    </Container>
  );
};
export default Login;
