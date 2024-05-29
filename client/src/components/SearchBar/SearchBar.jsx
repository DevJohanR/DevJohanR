// frontend/src/components/SearchBar/SearchBar.js
import React, { useState, useEffect } from 'react';
import { FaSearch } from 'react-icons/fa';
import styles from './SearchBar.module.css';

const SearchBar = ({ setSearchTerm }) => {
  const [inputValue, setInputValue] = useState('');
  const [filteredResults, setFilteredResults] = useState([]);
  const [isFocused, setIsFocused] = useState(false);

  useEffect(() => {
    const searchTerm = inputValue.trim().toLowerCase().replace(/\s+/g, '');
    setSearchTerm(searchTerm);
    if (searchTerm) {
      // Simular resultados de búsqueda para la demostración
      const technologies = ["React", "Node.js", "MySQL", "Firebase", "HTML", "CSS"];
      const results = technologies.filter(item =>
        item.toLowerCase().replace(/\s+/g, '').includes(searchTerm)
      );
      setFilteredResults(results);
    } else {
      setFilteredResults([]);
    }
  }, [inputValue, setSearchTerm]);

  const highlightMatch = (text, highlight) => {
    const regex = new RegExp(`(${highlight})`, 'gi');
    const parts = text.split(regex);
    return parts.map((part, index) => (
      regex.test(part) ? <span key={index} className={styles.highlight}>{part}</span> : part
    ));
  };

  return (
    <div className={styles.searchContainer}>
      <input
        type="text"
        placeholder="Buscar..."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setTimeout(() => setIsFocused(false), 100)}
        className={styles.searchBar}
      />
      <button className={styles.searchButton}>
        <FaSearch />
      </button>
      {isFocused && (
        <div className={`${styles.searchResults} ${filteredResults.length ? 'visible' : 'hidden'}`}>
          {filteredResults.map((result, index) => (
            <div key={index} className={styles.searchResultItem}>
              {highlightMatch(result, inputValue.trim())}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
