import * as React from "react";

import { styled } from "styled-components";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";

import CountriesListTable from "./CountriesListTable";
import HomePage from "./HomePage";

interface TabPanelProps {
  children?: React.ReactNode;
  dir?: string;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

export default function CountriesApp() {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);
  const [selectedTab, setSelectedTab] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
    setSelectedTab(newValue);
  };

  const handleChangeIndex = (index: number) => {
    setValue(index);
  };

  return (
    <Box sx={{ bgcolor: "background.paper", width: "100%" }}>
      <AppBar position="static">
        <Tabs
          value={value}
          onChange={handleChange}
          textColor="inherit"
          aria-label="full width tabs example"
          sx={{
            backgroundColor: "#3F3F3F",
            color: "#fff",
          }}
        >
          <Tab
            label="Home"
            {...a11yProps(0)}
            style={{
              backgroundColor: selectedTab === 0 ? "#D6B406" : "#3f3f3f",
            }}
          />
          <Tab
            label="Countries"
            {...a11yProps(1)}
            style={{
              backgroundColor: selectedTab === 1 ? "#D6B406" : "#3f3f3f",
            }}
          />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0} dir={theme.direction}>
        <HomePage />
      </TabPanel>
      <TabPanel value={value} index={1} dir={theme.direction}>
        <CountriesListTable />
      </TabPanel>
    </Box>
  );
}
