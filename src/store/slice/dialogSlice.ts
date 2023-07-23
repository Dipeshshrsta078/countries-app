import { createSlice } from "@reduxjs/toolkit";

interface InitialStateProps {
  openDialog: boolean;
}
const initialState: InitialStateProps = {
  openDialog: false,
};
export const dialogSlice = createSlice({
  name: "dialog",
  initialState,
  reducers: {
    setDialogOpen: (state) => {
      state.openDialog = true;
    },
    setDialogClose: (state) => {
      state.openDialog = false;
    },
  },
});

export const { setDialogClose, setDialogOpen } = dialogSlice.actions;

export const selectDialog = (state: any) => state.dialog;
export default dialogSlice.reducer;
