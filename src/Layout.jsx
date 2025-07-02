import { Outlet } from "react-router-dom";
import Header from "./components/Header/Header";
import Container from "./components/Container/Container";
import SearchInput from "./components/SearchInput/SearchInput";

function Layout() {
  return (
    <div>
      <Header>
        <Container>
          <SearchInput onSearchChange={setSearchTerm} />
          <button onClick={toggleTheme}>
            {theme === "dark" ? "light" : "dark"}
          </button>
        </Container>
      </Header>

      <Outlet />
    </div>
  );
}

export default Layout;
