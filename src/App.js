import { GithubPins } from "./Components/GithubPins/GithubPins";
import { WorkHistory } from "./Components/WorkHistory/WorkHistory";
import { Header } from "./Components/Header/Header";
import { Technologies } from "./Components/Technologies/Technologies";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

const darkTheme = createTheme({
  display: "flex",
  palette: {
    mode: "dark",
  },
});

function App() {
  return (
    <div>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Header />
        <Technologies />
        <GithubPins />
        <WorkHistory />
      </ThemeProvider>
    </div>
  );
}

export default App;
