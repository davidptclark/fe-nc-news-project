import Alert from "@mui/material/Alert";
import { useEffect } from "react";

export default function SubmitPrompt({ deleteStatus, setDeleteStatus }) {
  useEffect(() => {
    const timeId = setTimeout(() => {
      // After 1.5 seconds set the show value to false
      setDeleteStatus(false);
    }, 1500);

    return () => {
      clearTimeout(timeId);
    };
  });

  if (deleteStatus === "success") {
    return (
      <Alert
        className="delete-prompt"
        onClose={() => {
          setDeleteStatus(null);
        }}
        severity="success"
      >
        Comment successfully deleted!
      </Alert>
    );
  } else if (deleteStatus === "failure") {
    return (
      <Alert
        className="delete-prompt"
        onClose={() => {
          setDeleteStatus(null);
        }}
        severity="error"
      >
        Something went wrong - please try again.
      </Alert>
    );
  }
  return <></>;
}
