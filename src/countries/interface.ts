export interface RowData {
  code: string;
  name: string;
  continent: string;
  capital: string;
  currency: string;
  languages: string[];
}

export interface ColumnDefs {}

export interface LoaderProps {
  loaderMessage: string;
}
