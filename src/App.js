import logo from "./logo.svg";
import "./App.css";
import BaliCulinaryPage from "./DiningSection";
import ResponsiveAwardsTable from "./award-table";
import EdgeResortNavigation from "./footer";
import ContentSection from "./luxuryHaven";
import PratnerSections from "./pratner";

function App() {
  return (
    <div className="App">
      <div className="flex flex-col h-screen">
        <PratnerSections />
        <BaliCulinaryPage />
        <ContentSection />
        <ResponsiveAwardsTable />
        <EdgeResortNavigation />
      </div>
    </div>
  );
}

export default App;
