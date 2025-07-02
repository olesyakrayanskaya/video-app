import Card from "./components/Card/Card";
import CardWrapper from "./components/CardWrapper/CardWrapper";
import Container from "./components/Container/Container";
import Header from "./components/Header/Header";
import SearchInput from "./components/SearchInput/SearchInput";
import { ITEMS } from "./data";
import { useState, useContext } from "react";
import useDebounce from "./hooks/useDebounce";
import { ThemeContext } from "./ThemeContext";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const debounsedSearch = useDebounce(searchTerm, 500);
  const filteredItems = ITEMS.filter((item) =>
    item.title.toLowerCase().includes(debounsedSearch.toLowerCase())
  );
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <>
      <Header>
        <Container>
          <SearchInput onSearchChange={setSearchTerm} />
          <button onClick={toggleTheme}>{theme === 'dark' ? 'light' : 'dark'}</button>
        </Container>
      </Header>
      <Container>
        <CardWrapper>
          {filteredItems.map((item) => (
            <Card image={item.image} title={item.title} key={item.id} />
          ))}
        </CardWrapper>
      </Container>
    </>
  );
}

export default App;
