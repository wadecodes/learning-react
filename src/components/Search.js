import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Search() {
  const [term, setTerm] = useState('');
  const [results, setResults] = useState([]);
  useEffect(() => {
    if (!term) return;
    const getResults = async () => {
      const response = await axios.get('https://en.wikipedia.org/w/api.php', {
        params: {
          action: 'query',
          format: 'json',
          list: 'search',
          origin: '*',
          srsearch: term,
        },
      });
      setResults(response.data.query.search);
    };

    const timeoutId = setTimeout(() => {
      getResults();
    }, 500);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [term]);

  const renderedResults = results.map((result) => {
    return (
      <div key={result.pageid} className="item">
        <div className="right floated content">
          <a
            className="ui button"
            href={`https://en.wikipedia.org?curid=${result.pageid}`}
          >
            GO
          </a>
        </div>
        <div className="content">
          <div className="header">{result.title}</div>
          <span dangerouslySetInnerHTML={{ __html: result.snippet }}></span>
        </div>
      </div>
    );
  });

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>Search</label>
          <input
            className="input"
            type="text"
            placeholder="What are you looking for?"
            value={term}
            onChange={(e) => setTerm(e.target.value)}
          />
        </div>
      </div>
      <div className="ui celled list">{renderedResults}</div>
    </div>
  );
}

export default Search;
