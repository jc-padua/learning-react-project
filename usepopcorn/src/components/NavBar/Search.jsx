import React, { useState } from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';
import useKey from '../../hooks/useKey';

function Search({ query, setQuery }) {
  const searchRef = useRef(null);

  useKey('Enter', function () {
    if (document.activeElement === searchRef.current) return;
    searchRef.current.focus();
    setQuery('');
  });

  return (
    <input
      className="search"
      type="text"
      placeholder="Search movies..."
      value={query}
      onChange={e => setQuery(e.target.value)}
      ref={searchRef}
    />
  );
}
export default Search;
