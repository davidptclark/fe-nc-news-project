import * as api from "../utils/api";
import { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CircularProgress from "@mui/material/CircularProgress";

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
    <Card className="user-card" elevation={3} sx={{ width: 200 }}>
      <h4>{userDetails.username}</h4>
      <img
        className="user-avatar"
        src={userDetails.avatar_url}
        alt="user avatar"
      />
    </Card>
  );
}
