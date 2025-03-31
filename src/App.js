import logo from "./logo.svg";
import "./App.css";
import BaliCulinaryPage from "./DiningSection";
import ResponsiveAwardsTable from "./award-table";
import EdgeResortNavigation from "./footer";

function App() {
  return (
    <div className="App">
      <div className="flex justify-center items-center h-screen">
        <EdgeResortNavigation />
      </div>
    </div>
  );
}

export default App;
