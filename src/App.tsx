import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { Grid, Typography } from "@mui/material";
import TextFixer from "./components/TextFixer";

function App() {
  return (
    <Grid container>
      <Grid item xs={12}>
        <Typography
          variant="h3"
          sx={{ textAlign: "center", mb: 3, fontWeight: 500 }}
        >
          Text Fixer
        </Typography>
      </Grid>

      <TextFixer />
    </Grid>
  );
}

export default App;
