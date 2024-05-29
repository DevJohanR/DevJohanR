// frontend/src/components/About/About.js
import React, { useState } from 'react';
import SearchBar from '../SearchBar/SearchBar';
import ProjectsSearch from '../ProjectsSearch/ProjectsSearch';

const About = () => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div>
      <h1>About</h1>
      <SearchBar setSearchTerm={setSearchTerm} />
      <ProjectsSearch searchTerm={searchTerm} />
    </div>
  );
};

export default About;
