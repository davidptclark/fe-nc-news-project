export default function ErrorPage({ error }) {
  return (
    <main>
      <h2>
        {error.data.msg}: {error.status}
      </h2>
      <h3>
        ...in other words, you've probably mistyped the URL: check it and try
        again.
      </h3>
    </main>
  );
}
