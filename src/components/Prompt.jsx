import Alert from '@mui/material/Alert';

export default function Prompt({ postStatus, SetPostStatus }) {
  if (postStatus === 'success') {
    return (
      <Alert
        onClose={() => {
          SetPostStatus(null);
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
          SetPostStatus(null);
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
          SetPostStatus(null);
        }}
        severity="warning"
      >
        You must include a comment before posting.
      </Alert>
    );
  }
  return <></>;
}
