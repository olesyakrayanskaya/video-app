import styles from "./SearchInput.module.css";
import { useState } from "react";

function SearchInput({ onSearchChange }) {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
    onSearchChange(value);
  };

  return (
    <input
      className={styles.search_input}
      type="search"
      name="search"
      id="search"
      placeholder="Search..."
      value={inputValue}
      onChange={handleChange}
    />
  );
}

export default SearchInput;
