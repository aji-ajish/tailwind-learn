import Appbar from "./components/Appbar";
import Filters from "./components/Filters";
import Footer from "./components/Footer";
import Items from "./components/Items";
import SeasonSpecial from "./components/SeasonSpecial";

function App() {
  return (
    <>
      <Appbar/>
      <Filters/>
      <Items/>
      <SeasonSpecial/>
      <Footer/>
    </>
  );
}

export default App;
