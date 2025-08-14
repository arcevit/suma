import AppProviders from "./main/AppProvider";
import { MainRouter } from "./main/router/MainRouter";

function App() {
  return (
    <AppProviders>
      <MainRouter />
    </AppProviders>
  );
}

export default App;
