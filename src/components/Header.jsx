import { Link } from 'react-router-dom';
export default function Header() {
  return (
    <Link to="/">
      {/* Allows user to head back to the home page without explicitly changing the URL */}
      <h1 className="header">NC News</h1>
    </Link>
  );
}
