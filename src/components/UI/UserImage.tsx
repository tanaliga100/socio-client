import { Box } from "@mui/material";

type Image = {
  image?: string;
  size: string;
};

const UserImage: React.FC<Image> = ({ image, size = "60px" }) => {
  return (
    <Box width={size} height={size}>
      <img
        style={{ objectFit: "cover", borderRadius: "50%" }}
        width={size}
        height={size}
        alt="user"
      />
    </Box>
  );
};
export default UserImage;
