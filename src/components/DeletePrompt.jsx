import Alert from '@mui/material/Alert';

export default function SubmitPrompt({ deleteStatus, setDeleteStatus }) {
  if (deleteStatus === 'success') {
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
  } else if (deleteStatus === 'failure') {
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
