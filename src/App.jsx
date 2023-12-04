/* MUI Imports */
import { Container } from "@mui/material";
/* Component Imports */
import AnimatedRoutes from "./components/AnimatedRoutes";

function App() {
  return (
    <Container maxWidth={false} sx={{ paddingLeft: 0, pr: 0 }} disableGutters>
      <AnimatedRoutes />
    </Container>
  );
}

export default App;
