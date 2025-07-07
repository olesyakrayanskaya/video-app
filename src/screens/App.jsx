import Card from "../components/Card/Card";
import CardWrapper from "../components/CardWrapper/CardWrapper";
import Container from "../components/Container/Container";
import Header from "../components/Header/Header";
import SearchInput from "../components/UI/SearchInput/SearchInput";
import { ITEMS } from "../data";
import { useState, useContext, useMemo } from "react";
import useDebounce from "../hooks/useDebounce";
import { ThemeContext } from "../ThemeContext";
import ButtomTheme from "../components/UI/ButtonTheme/ButtomTheme";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const debounsedSearch = useDebounce(searchTerm, 500);
  const filteredItems = useMemo(() => {
    return ITEMS.filter((item) =>
      item.title.toLowerCase().includes(debounsedSearch.toLowerCase())
    );
  }, [debounsedSearch]);
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <>
      <Header>
        <Container>
          <SearchInput onSearchChange={setSearchTerm} />
          <ButtomTheme theme={theme} onClick={toggleTheme}/>
        </Container>
      </Header>
      <Container>
        <CardWrapper>
          {filteredItems.map((item) => (
            <Card
              image={item.image}
              title={item.title}
              key={item.id}
              videoId={item.videoId}
              id={item.id}
            />
          ))}
        </CardWrapper>
      </Container>
    </>
  );
}

export default App;
