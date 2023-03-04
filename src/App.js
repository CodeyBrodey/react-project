import Header from "./components/header/header";
import SearchBar from "./components/search-bar/search-bar";
import Filter from "./components/filter/filter";
import CountryCard from './components/country-card/card';


function App() {
  return (
    <>
      <Header />
      <SearchBar />
      <Filter />
      <CountryCard />
    </>
  );
}


export default App;
