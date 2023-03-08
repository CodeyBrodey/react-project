import Header from "./components/header/header";
import SearchBar from "./components/search-bar/search-bar";
import Filter from "./components/filter/filter";
import CountryCards from './components/country-card/card';


function App() {
  return (
    <>
      <Header />
      <SearchBar />
      <Filter />
      <CountryCards />
    </>
  );
}


export default App;
