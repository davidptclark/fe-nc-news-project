import Alert from '@mui/material/Alert';

export default function SubmitPrompt({ postStatus, setPostStatus }) {
  if (postStatus === 'success') {
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
  } else if (postStatus === 'failure') {
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
  } else if (postStatus === 'incomplete') {
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
