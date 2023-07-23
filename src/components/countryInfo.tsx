import { Box, Card, Container, Grid, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { selectCountryDetail } from "../store/slice/countryDetailSlice";
import { count } from "console";

export const CountryInfo = () => {
  const { country } = useSelector(selectCountryDetail);
  console.log({ country });
  return (
    <Card>
      <Container>
        <Grid
          container
          maxWidth="xl"
          columnSpacing={2}
          rowSpacing={2}
          sx={{
            justifyContent: "space-between",
            marginTop: "10px",
            paddingBottom: "10px",
            marginBottom: "10px",
          }}
        >
          <Grid item xs={4}>
            <Box
              sx={{
                backgroundColor: "#C0A517",
                height: 40,
                padding: "10px",
              }}
            >
              <Typography sx={{ color: "black" }}>Name</Typography>
            </Box>
          </Grid>
          <Grid item xs={8}>
            <Box
              sx={{
                backgroundColor: "#D3C9A3",
                height: 40,
                padding: "10px",
              }}
            >
              <Typography sx={{ color: "black" }}>{country.name}</Typography>
            </Box>
          </Grid>
          <Grid item xs={4}>
            <Box
              sx={{
                backgroundColor: "#C0A517",
                height: 40,
                padding: "10px",
              }}
            >
              <Typography sx={{ color: "black" }}>Code</Typography>
            </Box>
          </Grid>
          <Grid item xs={8}>
            <Box
              sx={{
                backgroundColor: "#D3C9A3",
                height: 40,
                padding: "10px",
              }}
            >
              <Typography sx={{ color: "black" }}>{country.code}</Typography>
            </Box>
          </Grid>
          <Grid item xs={4}>
            <Box
              sx={{
                backgroundColor: "#C0A517",
                height: 40,
                padding: "10px",
              }}
            >
              <Typography sx={{ color: "black" }}>Continent</Typography>
            </Box>{" "}
          </Grid>
          <Grid item xs={8}>
            <Box
              sx={{
                backgroundColor: "#D3C9A3",
                height: 40,
                padding: "10px",
              }}
            >
              <Typography sx={{ color: "black" }}>
                {country.continent}
              </Typography>
            </Box>{" "}
          </Grid>
          <Grid item xs={4}>
            <Box
              sx={{
                backgroundColor: "#C0A517",
                height: 40,
                padding: "10px",
              }}
            >
              <Typography sx={{ color: "black" }}>Languages</Typography>
            </Box>{" "}
          </Grid>
          <Grid item xs={8}>
            <Box
              sx={{
                backgroundColor: "#D3C9A3",
                height: 40,
                padding: "10px",
              }}
            >
              <Typography sx={{ color: "black" }}>
                {country.languages.join(", ")}
              </Typography>
            </Box>{" "}
          </Grid>
          <Grid item xs={4}>
            <Box
              sx={{
                backgroundColor: "#C0A517",
                height: 40,
                padding: "10px",
              }}
            >
              <Typography sx={{ color: "black" }}>Capital</Typography>
            </Box>{" "}
          </Grid>
          <Grid item xs={8}>
            <Box
              sx={{
                backgroundColor: "#D3C9A3",
                height: 40,
                padding: "10px",
              }}
            >
              <Typography sx={{ color: "black" }}>{country.capital}</Typography>
            </Box>{" "}
          </Grid>
          <Grid item xs={4}>
            <Box
              sx={{
                backgroundColor: "#C0A517",
                height: 40,
                padding: "10px",
              }}
            >
              <Typography sx={{ color: "black" }}>Currency</Typography>
            </Box>{" "}
          </Grid>
          <Grid item xs={8}>
            <Box
              sx={{
                backgroundColor: "#D3C9A3",
                height: 40,
                padding: "10px",
              }}
            >
              <Typography sx={{ color: "black" }}>
                {country.currency}
              </Typography>
            </Box>{" "}
          </Grid>
        </Grid>
      </Container>
    </Card>
  );
};
