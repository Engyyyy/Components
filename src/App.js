import Sidebar from "./components/Sidebar";
import Router from "./components/Router";
import ButtonsPage from "./pages/ButtonsPage";
import AccordionPage from "./pages/AccordionPage";
import DropdownPage from "./pages/DropdownPage";

function App() {
  return (
    <div className="container mx-auto grid grid-cols-6 gap-4 mt-4">
      <div>
        <Sidebar />
      </div>
      <div className="col-span-5">
        <Router path="/buttons">
          <ButtonsPage />
        </Router>
        <Router path="/accordion">
          <AccordionPage />
        </Router>
        <Router path="/dropdown">
          <DropdownPage />
        </Router>
      </div>
    </div>
  );
}

export default App;
