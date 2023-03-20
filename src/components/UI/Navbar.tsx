import { Help, Message, Notifications } from "@mui/icons-material";
import ConnectWithoutContactIcon from "@mui/icons-material/ConnectWithoutContact";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import SearchIcon from "@mui/icons-material/Search";
import {
  AppBar,
  Avatar,
  Box,
  Button,
  Grid,
  IconButton,
  InputBase,
  Menu,
  MenuItem,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import { APIResponse } from "../../interfaces/allModel";
import { setLogout, setMode } from "../../state/auth-slice";
import { useAppDispatch, useAppSelector } from "../../state/hooks";

// COMPONENT
const Navbar = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state);
  const navigate = useNavigate();

  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const profileName = useAppSelector((state) => state.user) as APIResponse;

  //   RESPONSIVENESS;
  const [w, setW] = React.useState(window.innerWidth);
  React.useEffect(() => {
    const handleResize = () => {
      setW(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <AppBar position="fixed" color="transparent">
      <Toolbar>
        <Grid container justifyContent="center" alignItems="center">
          <Grid item xs sx={{ md: 12 }}>
            <Stack spacing={1} direction="row">
              <IconButton size="large" edge="start" color="inherit">
                <ConnectWithoutContactIcon />
              </IconButton>
              {w < 400 ? (
                ""
              ) : (
                <Typography
                  variant="h4"
                  marginRight="3rem"
                  color="primary"
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    "&:hover": {
                      cursor: "pointer",
                    },
                  }}
                >
                  socioLive
                </Typography>
              )}
              <InputBase placeholder="search..." sx={{ paddingLeft: "4rem" }} />
              <IconButton>
                <SearchIcon color="primary" />
              </IconButton>
            </Stack>
          </Grid>
          <Grid item xs>
            <Stack
              direction="row"
              sx={{
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "center",
              }}
            >
              <Box
                component="span"
                sx={{
                  display: "flex",
                  justifyContent: "space-evenly",
                  width: 200,
                }}
              >
                <Message />
                <Notifications />
                <Help />
              </Box>
              <IconButton
                size="small"
                edge="start"
                // color="inherit"
                onClick={() => dispatch(setMode())}
              >
                <LightModeOutlinedIcon />
              </IconButton>
              <Button
                id="basic-button"
                aria-controls={open ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
              >
                <Avatar src="https://media.licdn.com/dms/image/D5603AQG5nClz14tqag/profile-displayphoto-shrink_800_800/0/1668166834661?e=2147483647&v=beta&t=CbzGAWFzXi0tufVbGt0P37F3thY5W40YarYqQc9Pepk" />
              </Button>
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  "aria-labelledby": "basic-button",
                }}
              >
                <MenuItem onClick={handleClose}>
                  {" "}
                  {profileName.firstName.charAt(0).toUpperCase() +
                    profileName.firstName.slice(1)}
                </MenuItem>
                <MenuItem onClick={() => dispatch(setLogout())}>
                  Logout
                </MenuItem>
              </Menu>
            </Stack>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};
export default Navbar;
