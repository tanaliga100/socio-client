import { Box } from "@mui/material";
import Navbar from "../../components/UI/Navbar";
import UserWidget from "../../components/widgets/UserWidget";
import { useAppSelector } from "../../state/hooks";

const HomePage = () => {
  const state = useAppSelector((state) => state.user);
  return (
    <div>
      <Navbar />
    </div>
  );
};

export default HomePage;
