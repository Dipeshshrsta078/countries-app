import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CountryProps {
  capital: string | null;
  code: string | null;
  continent: string | null;
  currency: string | null;
  languages: string[] | null;
  name: string | null;
}
interface InitialStateProps {
  country: CountryProps | null;
}
const initialState: InitialStateProps = {
  country: {
    capital: null,
    code: null,
    continent: null,
    currency: null,
    languages: null,
    name: null,
  },
};
export const countryDetailSlice = createSlice({
  name: "countryDetail",
  initialState,
  reducers: {
    setCountryDetail: (state, action: PayloadAction<CountryProps>) => {
      console.log(action.payload);
      state.country = action.payload;
    },
  },
});

export const { setCountryDetail } = countryDetailSlice.actions;

export const selectCountryDetail = (state: any) => state.countryDetail;
export default countryDetailSlice.reducer;
