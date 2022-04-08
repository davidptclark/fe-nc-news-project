import * as api from "../utils/api";
import { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CircularProgress from "@mui/material/CircularProgress";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  breakpoints: {
    values: {
      xxs: 0, // smol phone
      xs: 300, // phone
      sm: 600, // tablets
      md: 912, // small laptop
      lg: 1200, // desktop
      xl: 1536, // large screens
    },
  },
});

export default function UserCard() {
  const [userDetails, setUserDetails] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    api.getUserDetailsByUsername("grumpy19").then(({ data: user }) => {
      setUserDetails(user[0]);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) return <CircularProgress />;
  return (
    <ThemeProvider theme={theme}>
      <Card
        className="user-card"
        elevation={3}
        sx={{
          width: { xxs: 100, xs: 100, sm: 150, md: 200, lg: 200, xl: 200 },
        }}
      >
        <h4>{userDetails.username}</h4>
        <img
          className="user-avatar"
          src={userDetails.avatar_url}
          alt="user avatar"
        />
      </Card>
    </ThemeProvider>
  );
}
