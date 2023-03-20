import {
  EditOutlined,
  LocationOnOutlined,
  ManageAccountsOutlined,
  WorkOutlineOutlined,
} from "@mui/icons-material";
import React, { useState } from "react";
import { APIResponse, IAuth } from '../../interfaces/allModel';
import { useAppSelector } from "../../state/hooks";
import FlexBetween from "../UI/FlexBetween";
import UserImage from "../UI/UserImage";
import WidgetWrapper from "../UI/WidgetWrapper";

type IUser = {
  userId: string;
  picture: string;
};

const UserWidget: React.FC<IUser> = ({ userId }) => {
  const token = useAppSelector((state) => state.token);
  const [user, setUser] = useState<APIResponse | null>(null);

  const getUser = async () => {
    const resp = await fetch(
      `${import.meta.env.VITE_APP_URL}/users/${userId}`,
      {
        method: "GET",
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    const data = await resp.json();
    console.log("CURRENT USER", data);

    // setUser(data);
  };
  React.useEffect(() => {
    getUser();
  }, []);
  if (!user) {
    return null;
  }

  // const {
  //   firstName,
  //   lastName,
  //   location,
  //   occupation,
  //   viewedProfile,
  //   impressions,
  //   friends,
  // } = user;

  return <WidgetWrapper>UserWidget</WidgetWrapper>;
};

export default UserWidget;
