import { Link } from "react-router-dom";
export default function CountriesApp() {
  return (
    <>
      <h1>Welcome to the Countries app</h1>
      <Link to="./countries-list">Countries List</Link>
    </>
  );
}
