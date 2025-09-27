import Community from "./components/Community";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HowToBuy from "./components/How-to-buy";
import Introduction from "./components/Introduction";
import Roadmap from "./components/Roadmap";
import Tokenomics from "./components/Tokenomics";
import Trading from "./components/Trading";

function App() {
  return (
    <div className="grid grid-rows-[auto_1fr_auto] min-h-screen bg-[#d9d9d9] gap-20 w-full">
      <Header />
      <main className="w-9/10 max-w-7xl mx-auto gap-20 grid pb-30 px-5">
        <Introduction />
        <HowToBuy />
        <Trading />
        <Community />
        <Tokenomics />
        <Roadmap />
      </main>
      <Footer />
    </div>
  );
}

export default App;
