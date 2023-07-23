import { Route, Routes } from "react-router-dom";
import "./App.css";

import CountriesApp from "./countries";
import CountriesListTable from "./countries/CountriesListTable";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route index element={<CountriesApp />} />
        <Route path="/home" element={<CountriesApp />} />
        <Route path="/countries-list" element={<CountriesListTable />} />
      </Routes>
    </div>
  );
}

export default App;
