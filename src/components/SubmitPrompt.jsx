import Alert from "@mui/material/Alert";
import { useEffect } from "react";

export default function SubmitPrompt({ postStatus, setPostStatus }) {
  useEffect(() => {
    const timeId = setTimeout(() => {
      // After 1.5 seconds set the show value to false
      setPostStatus(false);
    }, 1500);

    return () => {
      clearTimeout(timeId);
    };
  });

  if (postStatus === "success") {
    return (
      <Alert
        onClose={() => {
          setPostStatus(null);
        }}
        severity="success"
      >
        Comment successfully posted!
      </Alert>
    );
  } else if (postStatus === "failure") {
    return (
      <Alert
        onClose={() => {
          setPostStatus(null);
        }}
        severity="error"
      >
        Something went wrong - please try again.
      </Alert>
    );
  } else if (postStatus === "incomplete") {
    return (
      <Alert
        onClose={() => {
          setPostStatus(null);
        }}
        severity="warning"
      >
        You must include a comment before posting.
      </Alert>
    );
  }
  return <></>;
}
