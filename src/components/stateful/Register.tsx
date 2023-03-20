import { PhotoCamera } from "@mui/icons-material";
import {
  Button,
  Container,
  Grid,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import React, { Dispatch, SetStateAction } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { InputsRegister } from "../../interfaces/allModel";
import { useAppDispatch, useAppSelector } from "../../main";

type IProps = {
  setOpen: Dispatch<SetStateAction<boolean>>;
};

const Register: React.FC<IProps> = ({ setOpen }) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const status = useAppSelector((state) => state.status);

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm<InputsRegister>();
  const onSubmit: SubmitHandler<InputsRegister> = async (data) => {
    const {
      email,
      firstName,
      lastName,
      location,
      occupation,
      password,
      picture,
    } = data;

    if (
      email &&
      firstName &&
      lastName &&
      location &&
      occupation &&
      password &&
      picture
    ) {
      const formData = new FormData();
      formData.append("email", email);
      formData.append("firstName", firstName);
      formData.append("lastName", lastName);
      formData.append("location", location);
      formData.append("occupation", occupation);
      formData.append("password", password);
      formData.append("picturePath", picture[0].name);

      try {
        const response = await fetch(
          `${import.meta.env.VITE_APP_URL}/auth/register`,
          {
            method: "POST",
            body: formData,
          }
        );
        if (!response.ok) {
          throw new Error("Failed to submit form data.");
        }
        const savedUser = await response.json();
        if (savedUser) {
          // dispatch(setStatus(status));

          setTimeout(() => {
            setOpen(false);
          }, 2000);
        }

        reset();
      } catch (error) {
        console.error(error);
      }
    }
  };
  return (
    <Container sx={{ padding: "1rem" }}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid
          container
          alignItems="center"
          justifyContent="center"
          direction="column"
          flexGrow={1}
        >
          <Grid item>
            <TextField
              label="First Name"
              variant="standard"
              fullWidth
              type="text"
              {...register("firstName", { required: true })}
              name="firstName"
            />
            {errors.firstName && (
              <Typography color="error" variant="body2">
                This field is required
              </Typography>
            )}

            <TextField
              label="Last Name"
              variant="standard"
              fullWidth
              type="text"
              {...register("lastName", { required: true })}
              name="lastName"
            />
            {errors.lastName && (
              <Typography color="error" variant="body2">
                This field is required
              </Typography>
            )}
          </Grid>
          <Grid item>
            <TextField
              label="Email"
              variant="standard"
              fullWidth
              type="email"
              {...register("email", { required: true })}
              name="email"
            />
            {errors.email && (
              <Typography color="error" variant="body2">
                This field is required
              </Typography>
            )}
            <TextField
              label="Password"
              variant="standard"
              fullWidth
              type="password"
              {...register("password", { required: true })}
              name="password"
            />
            {errors.password && (
              <Typography color="error" variant="body2">
                This field is required
              </Typography>
            )}
          </Grid>
          <Grid item>
            <TextField
              label="Location"
              variant="standard"
              fullWidth
              type="text"
              {...register("location", { required: true })}
              name="location"
            />
            {errors.location && (
              <Typography color="error" variant="body2">
                This field is required
              </Typography>
            )}

            <TextField
              label="Occupation"
              variant="standard"
              fullWidth
              type="text"
              {...register("occupation", { required: true })}
              name="occupation"
            />
            {errors.occupation && (
              <Typography color="error" variant="body2">
                This field is required
              </Typography>
            )}
          </Grid>
          <Grid item mt={3}>
            <IconButton
              color="primary"
              aria-label="upload picture"
              component="label"
            >
              <input
                hidden
                accept="image/*"
                type="file"
                {...register("picture")}
              />
              <PhotoCamera />
              <Typography sx={{ marginX: "1rem" }}>Upload Picture</Typography>
            </IconButton>
          </Grid>
          <Grid item textAlign="center">
            <Button
              type="submit"
              variant="contained"
              sx={{ paddingX: "2rem", margin: "2rem" }}
            >
              <Typography variant="h6">Submit</Typography>
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};
export default Register;
