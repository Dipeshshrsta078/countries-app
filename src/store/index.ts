import { configureStore } from "@reduxjs/toolkit";
import dialogReducer from "./slice/dialogSlice";
import countryDetailSlice from "./slice/countryDetailSlice";

export default configureStore({
  reducer: {
    dialog: dialogReducer,
    countryDetail: countryDetailSlice,
  },
});
