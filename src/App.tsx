import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
    <div className="grid grid-rows-[auto_1fr_auto] min-h-screen bg-bg">
      <Header />
      <main>Billicat</main>
      <Footer />
    </div>
  );
}

export default App;
