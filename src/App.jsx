import { Container } from "./components/Container";
import { Dashboard } from "./components/Dashboard";
import { Navbar } from "./components/Navbar";
import {DisplayContextProvider} from './components/Context/DisplayContext'

function App() {
  return (
    <DisplayContextProvider>
      <Navbar />
      <Container>
        <Dashboard />
      </Container>
    </DisplayContextProvider>
  );
}

export default App;
