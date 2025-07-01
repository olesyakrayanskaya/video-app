import Card from "./components/Card/Card";
import CardWrapper from "./components/CardWrapper/CardWrapper";
import Container from "./components/Container/Container";
import Header from "./components/Header/Header";
import SearchInput from "./components/SearchInput/SearchInput";
import { ITEMS } from "./data";
import { useState } from "react";
import useDebounce from "./hooks/useDebounce";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const debounsedSearch = useDebounce(searchTerm, 500);
  const filteredItems = ITEMS.filter((item) =>
    item.title.toLowerCase().includes(debounsedSearch.toLowerCase())
  );

  return (
    <>
      <Header>
        <Container>
          <SearchInput onSearchChange={setSearchTerm} />
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
