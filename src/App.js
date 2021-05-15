import About from "./components/About/About";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <div className="bg-dark text-white">
      <Hero />
      <About/>
      </div>
    </>
  );
}

export default App;
