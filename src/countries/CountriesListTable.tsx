import {
  CircularProgress,
  Container,
  CssBaseline,
  LinearProgress,
} from "@mui/material";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import { AgGridReact } from "ag-grid-react";
import { useEffect, useMemo, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { CountryDetailDialog } from "../components/countryDetailDialog";
import useGQL from "../hooks/useGQL";
import { setCountryDetail } from "../store/slice/countryDetailSlice";
import { setDialogOpen } from "../store/slice/dialogSlice";
import { Loader } from "../utils/loader";
import { RowData } from "./interface";
import CircularSpinner from "../components/circularProgress";

export default function () {
  const navigate = useNavigate();

  const [gridApi, setGridApi] = useState(null);
  const [rowData, setRowData] = useState<RowData[]>([]);
  const [columnDefs, setColumnDefs] = useState<any>([
    { field: "code", filter: true, floatingFilter: true },
    { field: "name", filter: true, floatingFilter: true },
    { field: "continent" },
    { field: "capital" },
    { field: "currency" },
    { field: "languages" },
  ]);

  const dispatch = useDispatch();

  const { GET_ALL_COUNTRIES } = useGQL();

  const handleCellClicked = (params: any) => {
    dispatch(setCountryDetail(params.data));
    dispatch(setDialogOpen());
  };

  const defaultColumnDef = useMemo(
    () => ({
      sortable: true,
      flex: 1,
    }),
    []
  );

  const { data, error, loading, refetch } = GET_ALL_COUNTRIES();

  useEffect(() => {
    if (data && data.countries) {
      const countriesList = data.countries.flatMap((country: any) => ({
        code: country.code,
        name: country.name,
        continent: country.continent.name,
        capital: country.capital,
        currency: country.currency,
        languages: country.languages.map((language: any) => language.name),
      }));
      setRowData(countriesList);
    }
  }, [data]);

  if (loading) {
    console.log("Loading...");
    return (
      <Container component="main" maxWidth="xl">
        <CircularProgress color="inherit" />
      </Container>
    );
  }

  if (error) {
    console.log(error);
  }

  const onGridReady = (params: any) => {
    setGridApi(params);
  };
  return (
    <Container component="main" maxWidth="xl">
      <CssBaseline />
      <div
        className="ag-theme-alpine-dark"
        style={{ height: 600, width: "100%" }}
      >
        <CountryDetailDialog />
        <AgGridReact
          rowData={rowData}
          columnDefs={columnDefs}
          defaultColDef={defaultColumnDef}
          onGridReady={onGridReady}
          onCellClicked={handleCellClicked}
          animateRows={true}
          pagination={true}
          paginationPageSize={10}
        />
      </div>
    </Container>
  );
}
