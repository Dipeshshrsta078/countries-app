import { useDispatch, useSelector } from "react-redux";

import {
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  Typography,
} from "@mui/material";

import { selectDialog, setDialogClose } from "../store/slice/dialogSlice";
import { CountryInfo } from "./countryInfo";

export const CountryDetailDialog = () => {
  const { openDialog } = useSelector(selectDialog);
  const dispatch = useDispatch();
  const handleCloseDialog = () => {
    dispatch(setDialogClose());
  };

  return (
    <>
      <Dialog
        maxWidth="lg"
        fullWidth
        open={openDialog}
        onClose={handleCloseDialog}
      >
        <DialogTitle sx={{ backgroundColor: "#181d1f" }}>
          <Typography sx={{ color: "#C0A517" }}> Country Profile</Typography>
          <Typography>
            <IconButton
              sx={{ color: "#fff", position: "absolute", top: 6, right: 16 }}
              onClick={handleCloseDialog}
            >
              x
            </IconButton>
          </Typography>
        </DialogTitle>
        <DialogContent sx={{ backgroundColor: "#181d1f" }}>
          <CountryInfo />
        </DialogContent>
      </Dialog>
    </>
  );
};
