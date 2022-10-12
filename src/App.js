import React from "react";

import "./App.css";
import { createTheme, ThemeProvider } from "@mui/material";
import logo from "./assets/img/VAULTSEC-1.png";

import Header from "./components/Header";

function App() {
  const [mode, setMode] = React.useState("dark");

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode]
  );

  return (
    <ThemeProvider theme={theme}>
      <Header mode={mode} setMode={setMode} />
    </ThemeProvider>
  );
}

export default App;
